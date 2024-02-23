import {RootState} from "../store"

export const selectProducts = (state: RootState) => state.products.products
export const selectProductsState = (state: RootState) =>
	state.products.productsState
export const selectProduct = (state: RootState) =>
	state.products.selectedProduct

export const selectProductState = (state: RootState) =>
	state.products.selectedProductState
