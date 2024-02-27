import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/Layout/Layout"

import lazyWithPreload from "./preload/lazyWithPreload"
import ErrorMessage from "./Error/ErrorMessage"

const Home = lazyWithPreload(() => import("../pages/Home/Home"))
const About = lazyWithPreload(() => import("../pages/About/About"))
const Contact = lazyWithPreload(() => import("../pages/Contact/Contact"))
const ProductPage = lazyWithPreload(() => import("../pages/Product/Product"))
const ProductManagement = lazyWithPreload(
	() => import("../pages/ProductManagement/ProductManagement")
)
const AddProduct = lazyWithPreload(
	() => import("../pages/AddProduct/AddProduct")
)

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorMessage />,
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
	{
		path: "/product-management",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <ProductManagement />,
			},
		],
	},
	{
		path: "/products/:productId",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <ProductPage />,
			},
		],
	},
	{
		path: "/products/add",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <AddProduct />,
			},
		],
	},
])
