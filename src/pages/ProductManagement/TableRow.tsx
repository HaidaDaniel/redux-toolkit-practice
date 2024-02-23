import React from "react"
import {Button} from "@mui/material"
import {Table} from "@devexpress/dx-react-grid-material-ui"

interface TableRowProps {
	row: any
	onToggleAction: (id: number) => void
	actionLabel: string
	columns: any[]
}
const TableRow: React.FC<TableRowProps> = ({
	row,
	onToggleAction,
	actionLabel,
	columns,
}) => (
	<Table.Row {...row}>
		{columns.map((column: any) => (
			<Table.Cell
				key={column.name}
				value={row[column.name]}
				column={column}
				tableRow={row}
				tableColumn={column}
				row={row}
			>
				{column.name === "delete" ? (
					<Button
						onClick={() => onToggleAction(row.id)}
						variant="outlined"
						color="primary"
					>
						{actionLabel}
					</Button>
				) : (
					row[column.name]
				)}
			</Table.Cell>
		))}
	</Table.Row>
)

export default TableRow
