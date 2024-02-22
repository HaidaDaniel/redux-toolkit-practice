import {useAppDispatch} from "../../store/store"
// import styles from "./ProductManagement.module.scss"

import {useEffect, useState} from "react"
import {useSelector} from "react-redux"

import {
	Grid,
	Table,
	Toolbar,
	SearchPanel,
	TableHeaderRow,
	PagingPanel,
} from "@devexpress/dx-react-grid-material-ui"

import {CircularProgress, Paper} from "@mui/material"

import {
	ColumnExtensionsState,
	SortingColumnExtensionsState,
	columns,
} from "./GridProperties"
import {fetchProducts} from "../../store/Products/store"
import {
	selectProducts,
	selectProductsState,
} from "../../store/Products/selectors"
import {
	IntegratedFiltering,
	IntegratedPaging,
	IntegratedSorting,
	PagingState,
	SearchState,
	SortingState,
} from "@devexpress/dx-react-grid"

function ProductManagement() {
	// const [tableColumnExtensions] = useState(ColumnExtensionsState)
	const [SortingColumnExtensions] = useState(SortingColumnExtensionsState)

	const dispatch = useAppDispatch()
	const products = useSelector(selectProducts)
	const productsStatus = useSelector(selectProductsState)

	const gridDataConverter = (data: any) => {
		const convertedData = data.map((item: any) => {
			const flattenedItem: {[key: string]: any} = {}

			for (const key in item) {
				if (typeof item[key] === "object") {
					for (const nestedKey in item[key]) {
						flattenedItem[`${key}.${nestedKey}`] =
							item[key][nestedKey]
					}
				} else {
					flattenedItem[key] = item[key]
				}
			}

			return flattenedItem
		})
		return convertedData
	}

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	return (
		<Paper>
			{productsStatus.loading && <CircularProgress />}
			{productsStatus.error && <div>Error in download data</div>}
			{!productsStatus.loading && !productsStatus.error && (
				<Grid rows={gridDataConverter(products)} columns={columns}>
					<SortingState
						defaultSorting={[
							{columnName: "title", direction: "asc"},
						]}
						columnExtensions={SortingColumnExtensions}
					/>
					<IntegratedSorting />
					<PagingState defaultCurrentPage={0} pageSize={20} />
					<SearchState defaultValue="" />
					<IntegratedFiltering />
					<IntegratedPaging />
					<Table
					// columnExtensions={tableColumnExtensions}
					// rowComponent={({row}) => (
					// 	// <TableRow
					// 	// 	row={row}
					// 	// 	columns={columns}
					// 	// 	// onToggleAction={}
					// 	// 	isActionVisible={true}
					// 	// />
					// )}
					/>
					<PagingPanel />
					<Toolbar />
					<SearchPanel />
					<TableHeaderRow showSortingControls />
				</Grid>
			)}
		</Paper>
	)
}

export default ProductManagement
