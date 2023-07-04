import { useFoodData } from "../../hooks/useFoodData";
import { Card } from "../card/card";

export const Dashboard = () => {
  const { data } = useFoodData();

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map((foodData) => (
          <Card
            price={foodData.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            title={foodData.title}
            image={foodData.image}
          />
        ))}
      </div>
    </div>
  );
};
