import {createRef} from "react";

const Modal = ({modal, setModal, form, setForm}) => {
	if (!modal) return;

	const name = createRef();
	const phone = createRef();

	const handler = (e) => {
		e.preventDefault();

		if (name.current.value !== '' && phone.current.value !== '') {
			setForm([
				...form,
				{
					id: Date.now(),
					name: name.current.value,
					phone: phone.current.value
				}
			]);
			setModal(null);
		}
	}

	return (
		<>
			<div className="modal">
				<h2>New visitor</h2>
				<form onSubmit={handler}>
					<input type="text" name="name" ref={name} placeholder="Name" />
					<input type="text" name="phone" ref={phone} placeholder="Phone" />
					<button>Save</button>
				</form>
				<button className="close" onClick={() => setModal(null)}>X</button>
			</div>
			<div className="overlay"></div>
		</>
	);
};

export default Modal;