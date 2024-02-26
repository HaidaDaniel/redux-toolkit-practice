import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {selectProducts} from "../../store/Products/selectors"
import {fetchProducts} from "../../store/Products/store"
import {useAppDispatch} from "../../store/store"
import styles from "./Home.module.scss"
import {useNavigate} from "react-router-dom"

function Home() {
	const [offset, setOffset] = useState(0)
	const productsPerPage = 10

	const dispatch = useAppDispatch()
	const products = useSelector(selectProducts)
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(fetchProducts({offset: offset, limit: productsPerPage}))
	}, [dispatch])

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 200
			) {
				setOffset((prevOffset) => prevOffset + productsPerPage)
			}
		}

		window.addEventListener("scroll", handleScroll)
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
