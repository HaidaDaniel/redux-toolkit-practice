import {useEffect, useState} from "react"

import styles from "./Home.module.scss"
import {useNavigate} from "react-router-dom"
import GlobalConfig from "../../GlobalConfig"
import IProduct from "../../types/IProduct"
import {useGetAllProductsQuery} from "../../store/Products/ProductService"
import {RootState, useAppDispatch} from "../../store/store"
import {fetchCategories} from "../../store/Categories/store"
import {useSelector} from "react-redux"

function Home() {
	const [selectedCategories, setSelectedCategories] = useState<
		number[] | null
	>([])
	const [offset, setOffset] = useState(GlobalConfig.paginationParams.offset)
	const [products, setProducts] = useState<IProduct[]>([])
	const {
		data: newProductsResult,
		isLoading,
		refetch,
	} = useGetAllProductsQuery({
		offset: offset,
		limit: GlobalConfig.paginationParams.itemsPerPage,
	})

	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const categories = useSelector(
		(state: RootState) => state.categories.Categories
	)

	useEffect(() => {
		if (newProductsResult !== products && newProductsResult !== undefined) {
			setProducts([...products, ...newProductsResult])
		}
	}, [newProductsResult])

	useEffect(() => {
		dispatch(fetchCategories())
		const handleScroll = () => {
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 200
			) {
				setOffset(
					(prevOffset) =>
						prevOffset + GlobalConfig.paginationParams.itemsPerPage
				)
				refetch()
			}
		}
		if (!isLoading) {
			window.addEventListener("scroll", handleScroll)
		}

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const toggleCategory = (categoryId: number) => {
		console.log(categoryId)
		if (categoryId === 0) {
			setSelectedCategories(null)
		} else if (selectedCategories) {
			if (selectedCategories.includes(categoryId)) {
				setSelectedCategories(
					selectedCategories.filter((c) => c !== categoryId)
				)
			} else {
				setSelectedCategories([...selectedCategories, categoryId])
			}
		} else {
			setSelectedCategories([categoryId])
		}
	}

	return (
		<div className={styles.Home}>
			<div className="row">
				<div className="col">
					<button
						onClick={() => toggleCategory(0)}
						className={
							selectedCategories && selectedCategories.length > 0
								? styles.active
								: ""
						}
					>
						{"All"}
					</button>
					{categories &&
						categories.map((category) => (
							<button
								key={category.id}
								onClick={() => toggleCategory(category.id)}
								className={
									selectedCategories &&
									selectedCategories.includes(category.id)
										? styles.active
										: ""
								}
							>
								{category.name}
							</button>
						))}
				</div>
			</div>
			<div className="row">
				{products &&
					products.map((product) => (
						<div
							className="col-lg-4 col-md-6 mb-4"
							key={product.id}
						>
							<div className="card h-100">
								<img
									onClick={() =>
										navigate(`/products/${product.id}`)
									}
									src={product.images[0]}
									alt={product.title}
									className="card-img-top"
								/>
								<div className="card-body">
									<h2 className="card-title">
										{product.title}
									</h2>
									<p className="card-text">
										{product.description}
									</p>
									<p className="card-text">
										Price: ${product.price}
									</p>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}

export default Home
