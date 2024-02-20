import {Outlet} from "react-router-dom"
import LeftNav from "../LeftNav/LeftNav"
import styles from "./Layout.module.scss"

function Layout() {
	return (
		<div className={styles.Layout}>
			<LeftNav />
			<div className={styles.PageLayout}>
				{/* 	 */}
				<div className={styles.Outlet}>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Layout
