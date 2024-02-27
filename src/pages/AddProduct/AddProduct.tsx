import {useEffect} from "react"
import {useSelector} from "react-redux"
import {fetchCategories} from "../../store/Categories/store"
import {RootState, useAppDispatch} from "../../store/store"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm, SubmitHandler} from "react-hook-form"
import * as yup from "yup"

// type Inputs = {
// 	title: string
// 	price: number
// 	description: string
// 	categoryId: number
// 	images: string[]
// }

const schema = yup
	.object({
		title: yup.string().required(),
		price: yup.number().required(),
		description: yup.string().required(),
		categoryId: yup.number().required(),
		images: yup.array().of(yup.string().url()),
	})
	.required()

function AddProduct() {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(schema),
	})
	const dispatch = useAppDispatch()
	const categories = useSelector(
		(state: RootState) => state.categories.Categories
	)

	useEffect(() => {
		dispatch(fetchCategories())
	}, [dispatch])

	const onSubmit = (data: any) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register("title")} />
			<p>{errors.title?.message}</p>

			<input type="number" {...register("price")} />
			<p>{errors.price?.message}</p>

			<textarea {...register("description")} />
			<p>{errors.description?.message}</p>
			<select name="category">
				{categories &&
					categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
			</select>
			<p>{errors.categoryId?.message}</p>
			<input {...register("images")} />
			<p>{errors.images?.message}</p>
			<input type="submit" />
		</form>
	)
}

export default AddProduct
