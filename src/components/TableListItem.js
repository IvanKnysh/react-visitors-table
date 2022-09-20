
const TableListItem = ({count, name, phone}) => {
	return (
		<tr>
			<td>{count}</td>
			<td>{name}</td>
			<td>{phone}</td>
		</tr>
	);
};

export default TableListItem;