import {CircularProgress} from "@mui/material"

type DataState = {
	loading: boolean
	error: string | null
}
interface IDataStateHandlerProps {
	data: any
	dataState: DataState
	children: any
}
export default function DataStateHandler(props: IDataStateHandlerProps) {
	const {data, dataState, children} = props

	return (
		<>
			{dataState.loading && (
				<CircularProgress color="secondary" size={50} />
			)}
			{!dataState.loading &&
				!dataState.error &&
				data !== null &&
				data !== undefined &&
				children}
			{!dataState.loading &&
				!dataState.error &&
				(data === null || data === undefined) && (
					<div>data from server is null or undefined</div>
				)}
			{dataState.error && <div>Error in download data</div>}
		</>
	)
}
