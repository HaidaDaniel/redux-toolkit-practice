import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {BASE_URL} from "../../api"
export const deleteProductApi = createApi({
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
	}),
})

export const {useDeleteProductMutation} = deleteProductApi
