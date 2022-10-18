import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <button
        className="Button"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default App;
