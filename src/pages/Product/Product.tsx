import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import {fetchProduct} from "../../store/Products/store"
import {useAppDispatch} from "../../store/store"
import {useEffect} from "react"
import {selectProduct, selectProductState} from "../../store/Products/selectors"
import DataStateHandler from "../../helpers/DataStateHandler/DataStateHandler"
import styles from "./Product.module.scss"
import ProductDetails from "../../components/Product/ProductDetails"

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
		<div className={styles.ProductPage}>
			<DataStateHandler
				data={product}
				dataState={productState}
				children={
					<>
						<ProductDetails product={product} />
					</>
				}
			/>
		</div>
	)
}
