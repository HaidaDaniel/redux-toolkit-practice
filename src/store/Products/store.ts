import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import productService, {GetProductsParams} from "./service"
import IProduct from "../../types/IProduct"

interface ProductState {
	products: IProduct[]
	productsState: {loading: boolean; error: string | null}
	selectedProduct: IProduct
	selectedProductState: {loading: boolean; error: string | null}
}

const initialState: ProductState = {
	products: [],
	productsState: {loading: false, error: null},
	selectedProduct: {} as IProduct,
	selectedProductState: {loading: false, error: null},
}

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async (params: GetProductsParams) => {
		const response = await productService.getAllProducts(params)
		return response
	}
)

export const fetchProduct = createAsyncThunk(
	"products/fetchProduct",
	async (id: number) => {
		const response = await productService.getProductById(id)
		return response.data
	}
)

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.productsState.loading = true
				state.productsState.error = null
			})
			.addCase(
				fetchProducts.fulfilled,
				(state, action: PayloadAction<IProduct[]>) => {
					state.productsState.loading = false
					state.products = action.payload
				}
			)
			.addCase(fetchProducts.rejected, (state, action) => {
				state.productsState.loading = false
				state.productsState.error =
					action.error.message || "Failed to fetch products"
			})
			.addCase(fetchProduct.pending, (state) => {
				state.selectedProductState.loading = true
				state.selectedProductState.error = null
			})
			.addCase(
				fetchProduct.fulfilled,
				(state, action: PayloadAction<IProduct>) => {
					state.selectedProductState.loading = false
					state.selectedProduct = action.payload
				}
			)
			.addCase(fetchProduct.rejected, (state, action) => {
				state.selectedProductState.loading = false
				state.selectedProductState.error =
					action.error.message || "Failed to fetch product"
			})
	},
})

export default productSlice.reducer
