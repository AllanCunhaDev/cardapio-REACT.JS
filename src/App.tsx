import { useState } from "react";
import "./App.css";
import { Dashboard } from "./components/dashboard/dashboard";
import { CreateModal } from "./create-modal/modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Dashboard />
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button className="btn-novo" onClick={handleOpenModal}>Novo</button>
    </>
  );
}

export default App;
