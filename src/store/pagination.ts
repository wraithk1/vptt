import { createSlice } from '@reduxjs/toolkit'

const pagination = createSlice({
  name: 'pagination',
  initialState: { offset: 0, limit: 50, search: { brand: undefined, name: undefined, price: undefined } } as vptt.store.PaginationState,
  reducers: {
    prev: (state) => {
      state.offset -= state.limit
    },
    next: (state) => {
      state.offset += state.limit
    },
    search: (state, action: libs.rtk.PayloadAction<vptt.store.Search>) => {
      state.search.brand = action.payload.brand
      state.search.price = action.payload.price
      state.search.name = action.payload.name
    },
    setLimit: (state, action: libs.rtk.PayloadAction<number>) => {
      state.limit = action.payload
    },
  },
})

export const { prev, next, search, setLimit } = pagination.actions
export default pagination.reducer
