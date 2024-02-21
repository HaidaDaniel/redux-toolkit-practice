import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import productService from "./service"
import IProduct from "../../types/IProduct"

interface ProductState {
	products: IProduct[]
	product: IProduct | null
	loading: boolean
	error: string | null
}

const initialState: ProductState = {
	products: [],
	product: null,
	loading: false,
	error: null,
}

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const response = await productService.getAllProducts()
		return response.data
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
				state.loading = true
				state.error = null
			})
			.addCase(
				fetchProducts.fulfilled,
				(state, action: PayloadAction<IProduct[]>) => {
					state.loading = false
					state.products = action.payload
				}
			)
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || "Failed to fetch products"
			})
			.addCase(fetchProduct.pending, (state) => {
				state.loading = true
			})
			.addCase(
				fetchProduct.fulfilled,
				(state, action: PayloadAction<IProduct>) => {
					state.loading = false
					state.product = action.payload
				}
			)
			.addCase(fetchProduct.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || "Failed to fetch product"
			})
	},
})

export default productSlice.reducer
