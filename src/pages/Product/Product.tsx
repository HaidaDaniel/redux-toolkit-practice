import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import {fetchProduct} from "../../store/Products/store"
import {useAppDispatch} from "../../store/store"
import {useEffect} from "react"
import {selectProduct} from "../../store/Products/selectors"

export default function ProductPage() {
	const {productId} = useParams()
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (typeof productId === "string") {
			dispatch(fetchProduct(parseInt(productId)))
		}
	}, [dispatch, productId])

	const product = useSelector(selectProduct)

	return <h1>{product?.product?.description}</h1>
}
