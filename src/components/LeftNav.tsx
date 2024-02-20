import {Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

function LeftNav() {
	return (
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
		</Nav>
	)
}

export default LeftNav
