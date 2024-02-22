import {useEffect} from "react"
import {useSelector} from "react-redux"
import {selectProducts} from "../../store/Products/selectors"
import {fetchProducts} from "../../store/Products/store"
import {useAppDispatch} from "../../store/store"
import styles from "./ProductManagement.module.scss"
import {useNavigate} from "react-router-dom"
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table"
import IProduct from "../../types/IProduct"

function ProductManagement() {
	const dispatch = useAppDispatch()
	const products = useSelector(selectProducts)
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	const columnHelper = createColumnHelper<IProduct>()

	const columns = [
		columnHelper.accessor("title", {
			cell: (info) => info.getValue(),
			header: () => <span>Title</span>,
		}),
		columnHelper.accessor("price", {
			cell: (info) => info.getValue(),
			header: () => <span>Price</span>,
		}),
		columnHelper.accessor("description", {
			cell: (info) => info.getValue(),
			header: () => <span>Description</span>,
		}),
		columnHelper.accessor("category.name", {
			cell: (info) => info.getValue(),
			header: () => <span>Category</span>,
		}),
	]

	const table = useReactTable({
		data: products,
		columns,
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<div className={styles.Home}>
			<div className="row">
				{products && (
					<table>
						<thead>
							{table.getHeaderGroups().map((headerGroup) => (
								<tr key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<th key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef
															.header,
														header.getContext()
												  )}
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody>
							{table.getRowModel().rows.map((row) => (
								<tr key={row.id} className={styles.Row}>
									{row.getVisibleCells().map((cell) => (
										<td key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	)
}

export default ProductManagement
