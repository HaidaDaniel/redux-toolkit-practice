import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/Layout/Layout"

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
				element: <Home />,
			},
		],
	},
	{
		path: "/about",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <About />,
			},
		],
	},
	{
		path: "/contact",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Contact />,
			},
		],
	},
])
