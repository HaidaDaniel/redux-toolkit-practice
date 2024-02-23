import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import {fetchProduct} from "../../store/Products/store"
import {useAppDispatch} from "../../store/store"
import {useEffect} from "react"
import {selectProduct, selectProductState} from "../../store/Products/selectors"
import Carousel from "../../components/Carousel/Carousel"
import {CircularProgress} from "@mui/material"
import DataStateHandler from "../../helpers/DataStateHandler/DataStateHandler"

export default function ProductPage() {
	const {productId} = useParams()
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (typeof productId === "string") {
			dispatch(fetchProduct(parseInt(productId)))
		}
	}, [dispatch, productId])

	const product = useSelector(selectProduct)
	const productState = useSelector(selectProductState)

	return (
		<div>
			<DataStateHandler
				data={product}
				dataState={productState}
				children={
					<>
						<h1>{product?.title}</h1>
						{product?.images && <Carousel imgs={product.images} />}

						<p>
							Description: <br /> {product?.description}
						</p>

						<p>Price: {product?.price} usd</p>
					</>
				}
			/>
		</div>
	)
}
