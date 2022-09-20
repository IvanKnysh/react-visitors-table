
const Button = ({setModal}) => {
	return (
		<button className="open" onClick={() => setModal(true)}>New visitor</button>
	);
};

export default Button;