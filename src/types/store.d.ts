import { store } from "~/store"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type Search = Partial<Omit<vptt.entities.Product, 'id'>>

export interface PaginationState {
  offset: number
  limit: number
  search: Search
}
