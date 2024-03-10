import { useDispatch, useSelector } from 'react-redux'

export const useTypedDispatch = () => useDispatch<vptt.store.AppDispatch>();
export const useTypedSelector: libs.ReactRedux.TypedUseSelectorHook<vptt.store.RootState> = useSelector;