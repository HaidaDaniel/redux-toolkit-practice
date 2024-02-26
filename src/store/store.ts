import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./Products/store"
import categoriesReducer from "./Categories/store"
import {useDispatch} from "react-redux"
import {ProductApi} from "./Products/ProductService"

const store = configureStore({
	reducer: {
		products: productReducer,
		categories: categoriesReducer,
		[ProductApi.reducerPath]: ProductApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(ProductApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store
