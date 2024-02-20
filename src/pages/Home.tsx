import {useEffect} from "react"
import {useSelector} from "react-redux"
import {selectProducts} from "../store/Products/selectors"
import {fetchProducts} from "../store/Products/store"
import {useAppDispatch} from "../store/store"

function Home() {
	const dispatch = useAppDispatch()
	const products = useSelector(selectProducts)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])
	return (
		<div>
			{products &&
				products.map((product) => (
					<div className="product-card" key={product.id}>
						<img src={product.images[0]} alt={product.title} />
						<div className="product-details">
							<h2>{product.title}</h2>
							<p>{product.description}</p>
							<p>Price: ${product.price}</p>
						</div>
					</div>
				))}
		</div>
	)
}
export default Home
