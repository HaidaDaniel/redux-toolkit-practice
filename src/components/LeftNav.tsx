import {Drawer, List, ListItem, ListItemText} from "@material-ui/core"
import {Link} from "react-router-dom"

function LeftNav() {
	return (
		<>
			<Drawer open={true}>
				<List>
					<ListItem button>
						<Link to="/">Home</Link>
					</ListItem>
					<ListItem button>
						<Link to="/about">About</Link>
					</ListItem>
					<ListItem button>
						<Link to="/dashboard/messages">
							Messages (Dashboard)
						</Link>
					</ListItem>
				</List>
			</Drawer>
		</>
	)
}

export default LeftNav
