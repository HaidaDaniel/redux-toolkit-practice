import {useEffect} from "react"
import {useSelector} from "react-redux"
import {fetchCategories} from "../../store/Categories/store"
import {RootState, useAppDispatch} from "../../store/store"
import {useForm, SubmitHandler} from "react-hook-form"

type Inputs = {
	exampleRequired: string
}

function AddProduct() {
	const {
		register,
		handleSubmit,
		watch,
		formState: {errors},
	} = useForm<Inputs>()
	const dispatch = useAppDispatch()
	const categories = useSelector(
		(state: RootState) => state.categories.Categories
	)

	useEffect(() => {
		dispatch(fetchCategories())
	}, [dispatch])

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<select name="category">
				{categories &&
					categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
			</select>
			{errors.exampleRequired && <span>This field is required</span>}
			<input type="submit" />
		</form>
	)
}

export default AddProduct
