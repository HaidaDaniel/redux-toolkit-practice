import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./Products/store"
import {useDispatch} from "react-redux"
import {deleteProductApi} from "./Products/deleteService"

const store = configureStore({
	reducer: {
		products: productReducer,
		[deleteProductApi.reducerPath]: deleteProductApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(deleteProductApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store
