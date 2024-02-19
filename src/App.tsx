import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchProducts} from "./store/Products/store"

import "./App.css"
import {AppDispatch} from "./store/store"
import {selectProducts} from "./store/Products/selectors"

function App() {
	const dispatch = useDispatch<AppDispatch>()
	const products = useSelector(selectProducts)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])
	return (
		<div className="App">
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

export default App
