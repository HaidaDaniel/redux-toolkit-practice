import axios from "axios"

import {BASE_URL} from "../../api"
import ICategory from "../../types/ICategory"

export interface ICategoriesService {
	getAllCategories(): Promise<ICategory[]>
	deleteCategory(id: number): Promise<void>
}

const CategoriesService = {
	getAllCategories: async () => {
		return axios.get<ICategory[]>(`${BASE_URL}/categories`)
	},

	deleteCategory: async (id: number) => {
		return axios.delete(`${BASE_URL}/categories/${id}`)
	},
}

export default CategoriesService
