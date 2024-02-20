import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./Products/store"
import {useDispatch} from "react-redux"

const store = configureStore({
	reducer: {
		products: productReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store
