import {useState, useEffect} from "react";
import Button from "./components/Button";
import TableLists from "./components/TableLists";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState([]);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem('List')) || [];
    setForm(getData);
  }, []);

  useEffect(() => {
    if (form.length > 0) {
      localStorage.setItem('List', JSON.stringify(form));
    }
  }, [form]);

  return (
    <div className="app">
      <Button setModal={setModal} />
      <Modal modal={modal} setModal={setModal} form={form} setForm={setForm} />

      <table>
        <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Phone</td>
        </tr>
        </thead>

        <TableLists form={form} />
      </table>
    </div>
  );
}

export default App;
