import TableListItem from "./TableListItem";

const TableLists = ({form}) => {
	return (
		<tbody>
			{ form.map((item, i) => <TableListItem key={item.id} {...item} count={i+1} />) }
		</tbody>
	);
};

export default TableLists;