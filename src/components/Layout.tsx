import {Outlet, useNavigation} from "react-router-dom"
import LeftNav from "./LeftNav"

function Layout() {
	let navigation = useNavigation()

	return (
		<div>
			<div style={{position: "fixed", top: 0, right: 0}}>
				{navigation.state !== "idle" && (
					<p>Navigation in progress...</p>
				)}
			</div>

			<LeftNav />

			<Outlet />
		</div>
	)
}

export default Layout
