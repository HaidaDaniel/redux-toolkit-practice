import {useEffect, useState} from "react"

import styles from "./Home.module.scss"
import {useNavigate} from "react-router-dom"
import GlobalConfig from "../../GlobalConfig"
import IProduct from "../../types/IProduct"
import {useGetAllProductsQuery} from "../../store/Products/ProductService"

function Home() {
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

	const navigate = useNavigate()

	useEffect(() => {
		if (newProductsResult !== products && newProductsResult !== undefined) {
			setProducts([...products, ...newProductsResult])
		}
	}, [newProductsResult])

	useEffect(() => {
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

	return (
		<div className={styles.Home}>
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
