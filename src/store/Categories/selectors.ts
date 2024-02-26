import {RootState} from "../store"

export const selectCategories = (state: RootState) =>
	state.categories.Categories

export const selectCategoriesState = (state: RootState) =>
	state.categories.CategoriesState
