import {RootState} from "../store"

export const selectProducts = (state: RootState) => state.products.products
export const selectProduct = (state: RootState) => state.products
