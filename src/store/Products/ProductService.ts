import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {BASE_URL} from "../../api"
import IProduct from "../../types/IProduct"
export const ProductApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
	tagTypes: ["Product"],
	endpoints: (builder) => ({
		deleteProduct: builder.mutation({
			query: (id) => ({
				url: `/products/${id}`,
				method: "DELETE",
			}),
		}),
		getAllProducts: builder.query<
			IProduct[],
			{offset: number; limit: number}
		>({
			query: ({offset, limit}) =>
				`/products?${
					typeof offset === "number" ? `offset=${offset}&` : ""
				}${limit ? `limit=${limit}` : ""}`,
		}),
	}),
})

export const {useDeleteProductMutation, useGetAllProductsQuery} = ProductApi
