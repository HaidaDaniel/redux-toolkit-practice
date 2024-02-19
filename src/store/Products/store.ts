import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import productService from "./service"
import IProduct from "../../types/IProduct"

interface ProductState {
	products: IProduct[]
	loading: boolean
	error: string | null
}

const initialState: ProductState = {
	products: [],
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
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false
				state.products = action.payload
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || "Failed to fetch products"
			})
	},
})

export default productSlice.reducer
