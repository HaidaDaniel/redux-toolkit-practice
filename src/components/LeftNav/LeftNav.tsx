import {Nav} from "react-bootstrap"
import {Link} from "react-router-dom"
import style from "./LeftNav.module.scss"

function LeftNav() {
	return (
		<div className={style.LeftNav}>
			<div>Logo</div>
			<Nav defaultActiveKey="/home" className="flex-column">
				<Nav.Link as={Link} to="/">
					Home
				</Nav.Link>
				<Nav.Link as={Link} to="/about">
					About
				</Nav.Link>
				<Nav.Link as={Link} to="/contact">
					Contact
				</Nav.Link>
				<Nav.Link as={Link} to="/product-management">
					Product Management
				</Nav.Link>
				<Nav.Link as={Link} to="/products/add">
					Add Product
				</Nav.Link>
			</Nav>
		</div>
	)
}

export default LeftNav
