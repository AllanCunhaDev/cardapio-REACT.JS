import "./card.css";

interface CardProps {
  price: number | string;
  title: string;
  image: string;
}

export const Card = ({ price, title, image }: CardProps) => {
  return (
    <div className="card">
      <img src={image}></img>
      <h2>{title}</h2>
      <p>
        <b>Valor:</b>
        {price}
      </p>
    </div>
  );
};


