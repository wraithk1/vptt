import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import moment from 'moment'
import actions from '~store/actions'
import md5 from 'md5'
import _ from 'lodash'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.valantis.store:40000/',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'X-Auth': md5(`Valantis_${moment.utc().format('YYYYMMDD')}`),
    },
  }),
  tagTypes: ['Products', 'UNAUTHORIZED', 'BAD_REQUEST'],
  endpoints: (builder) => ({
    getProducts: builder.query<vptt.entities.Product[], vptt.store.PaginationState>({
      async queryFn(_arg, { getState }, _extraOptions, fetchWithBQ) {
        const {limit, offset, search} = _arg
        let _IDS: string[] = []

        if (_.some(_.values(search), Boolean)) {
          const filter_res: any = await fetchWithBQ({
            url: '/',
            method: 'POST',
            body: {
              action: actions.filter,
              params: search,
            } as vptt.api.Request<vptt.api.ParamsFilter>,
          })

          if (filter_res.error) return { error: filter_res.error as libs.rtkQuery.FetchBaseQueryError }
          _IDS = (filter_res.data as vptt.api.Response<string[]>).result
        } else {
          const get_ids_res: any = await fetchWithBQ({
            url: '/',
            method: 'POST',
            body: { action: actions.get_ids, params: { limit, offset } } as vptt.api.Request<vptt.api.ParamsGetIds>,
          })

          if (get_ids_res.error) return { error: get_ids_res.error as libs.rtkQuery.FetchBaseQueryError }
          _IDS = (get_ids_res.data as vptt.api.Response<string[]>).result
        }

        const _PRODUCTS = await fetchWithBQ({
          url: '/',
          method: 'POST',
          body: {
            action: actions.get_items,
            params: { ids: _IDS },
          } as vptt.api.Request<vptt.api.ParamsGetItems>,
        })
        return _PRODUCTS.data
          ? { data: (_PRODUCTS.data as vptt.api.Response<vptt.entities.Product[]>).result }
          : { error: _PRODUCTS.error as libs.rtkQuery.FetchBaseQueryError }
      },
      providesTags: (res, error, req) =>
        res ? ['Products'] : error?.status === 401 ? ['UNAUTHORIZED'] : ['BAD_REQUEST'],
    }),
    refetchErroredQueries: builder.mutation<null, void>({
      queryFn: () => ({ data: null }),
      invalidatesTags: ['BAD_REQUEST', 'UNAUTHORIZED'],
    }),
  }),
})

export const { useGetProductsQuery, useRefetchErroredQueriesMutation } = api