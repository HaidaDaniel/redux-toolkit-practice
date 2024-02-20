import {Outlet, useNavigation} from "react-router-dom"
import LeftNav from "../LeftNav"
import styles from "./Layout.module.scss"

function Layout() {
	let navigation = useNavigation()

	return (
		<div className={styles.Layout}>
			<div style={{position: "fixed", top: 0, right: 0}}>
				<LeftNav />
				{navigation.state !== "idle" && (
					<p>Navigation in progress...</p>
				)}
			</div>

			<Outlet />
		</div>
	)
}

export default Layout
