import actions from '~/store/actions'


export interface Response<T> {
  result: T
}

export interface Request<T = ParamsGetIds | ParamsGetItems | ParamsGetFields | ParamsFilter> {
  action: keyof typeof actions
  params: T
}

interface Params {
  offset: number
  limit: number
}

type ParamsGetIds = Params
type ParamsGetItems = { ids: string[] }
type ParamsGetFields = Params & { field: keyof vptt.entities.Product }
type ParamsFilter = Partial<Omit<vptt.entities.Product, 'id'>>
