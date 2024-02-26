import axios from "axios"
import IProduct from "../../types/IProduct"

import {BASE_URL} from "../../api"

export interface ProductService {
	getAllProducts(): Promise<IProduct[]>
	getProductById(id: number): Promise<IProduct>
}

export interface GetProductsParams {
	offset?: number
	limit?: number
}
const productService = {
	getAllProducts(params?: GetProductsParams): Promise<IProduct[]> {
		return axios
			.get<IProduct[]>(`${BASE_URL}/products`, {
				params,
			})
			.then((response) => response.data)
	},
	getProductById: async (id: number) => {
		return axios.get<IProduct>(`${BASE_URL}/products/${id}`)
	},
	deleteProduct: async (id: number) => {
		return axios.delete(`${BASE_URL}/products/${id}`)
	},
}

export default productService
