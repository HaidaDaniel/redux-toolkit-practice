import axios from "axios"
import IProduct from "../../types/IProduct"
import {BASE_URL} from "../../api"

export interface ProductService {
	getAllProducts(): Promise<IProduct[]>
	getProductById(id: number): Promise<IProduct>
}

const productService = {
	getAllProducts: async () => {
		return axios.get<IProduct[]>(`${BASE_URL}/products`)
	},
	getProductById: async (id: number) => {
		return axios.get<IProduct>(`${BASE_URL}/products/${id}`)
	},
}

export default productService
