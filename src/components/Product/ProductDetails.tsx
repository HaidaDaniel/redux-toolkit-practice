import IProduct from "../../types/IProduct"
import ControlledCarousel from "../Carousel/Carousel"

function ProductDetails({product}: {product: IProduct}) {
	return (
		<div>
			<h1>{product?.title}</h1>
			{product?.images && <ControlledCarousel imgs={product.images} />}

			<p>
				Description: <br /> {product?.description}
			</p>

			<p>Price: {product?.price} usd</p>
		</div>
	)
}

export default ProductDetails
