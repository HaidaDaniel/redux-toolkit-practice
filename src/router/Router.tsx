import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/Layout/Layout"
import {Suspense} from "react"
// import About from "../pages/About/About"
// import Contact from "../pages/Contact/Contact"
import lazyWithPreload from "./preload/lazyWithPreload"

const Home = lazyWithPreload(() => import("../pages/Home/Home"))
const About = lazyWithPreload(() => import("../pages/About/About"))
const Contact = lazyWithPreload(() => import("../pages/Contact/Contact"))

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Home />
					</Suspense>
				),
			},
		],
	},
	{
		path: "/about",
		element: <Layout />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<About />
					</Suspense>
				),
			},
		],
	},
	{
		path: "/contact",
		element: <Layout />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Contact />
					</Suspense>
				),
			},
		],
	},
])
