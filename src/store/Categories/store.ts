import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import CategoriesService from "./service"
import ICategory from "../../types/ICategory"

interface ICategoriesState {
	Categories: ICategory[]
	CategoriesState: {loading: boolean; error: string | null}
}

const initialState: ICategoriesState = {
	Categories: [],
	CategoriesState: {loading: false, error: null},
}

export const fetchCategories = createAsyncThunk(
	"Categories/fetchCategories",
	async () => {
		const response = await CategoriesService.getAllCategories()
		return response.data
	}
)

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategories.pending, (state) => {
				state.CategoriesState.loading = true
				state.CategoriesState.error = null
			})
			.addCase(
				fetchCategories.fulfilled,
				(state, action: PayloadAction<ICategory[]>) => {
					state.CategoriesState.loading = false
					state.Categories = action.payload
				}
			)
			.addCase(fetchCategories.rejected, (state, action) => {
				state.CategoriesState.loading = false
				state.CategoriesState.error =
					action.error.message || "Failed to fetch Categories"
			})
	},
})

export default categoriesSlice.reducer
