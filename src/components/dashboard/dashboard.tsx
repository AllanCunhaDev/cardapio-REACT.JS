import { useState } from "react";
import { CreateModal } from "../../create-modal/modal";
import { useFoodData } from "../../hooks/useFoodData";
import { Card } from "../card/card";

export const Dashboard = () => {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () =>{
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map((foodData) => (
          <Card
            key={foodData.id}
            price={foodData.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            title={foodData.title}
            image={foodData.image}
          />
        ))}
      </div>
      {isModalOpen && <CreateModal />}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  );
};
