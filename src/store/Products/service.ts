import axios from "axios"
import IProduct from "../../types/IProduct"
import {BASE_URL} from "../../api"

const productService = {
	getAllProducts: async () => {
		return axios.get<IProduct[]>(`${BASE_URL}/products`)
	},
}

export default productService
