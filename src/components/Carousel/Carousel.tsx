import {useState} from "react"
import Carousel from "react-bootstrap/Carousel"

interface IControlledCarousel {
	imgs: string[]
}

function ControlledCarousel(props: IControlledCarousel): JSX.Element {
	const [index, setIndex] = useState(0)
	const {imgs} = props

	const handleSelect = (selectedIndex: number) => {
		setIndex(selectedIndex)
	}

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			{imgs.map((img, i) => (
				<Carousel.Item key={i}>
					<img src={img} alt="" />
					<Carousel.Caption>
						<h3>Slide {i + 1}</h3>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export default ControlledCarousel
