import { useState } from "react";
import { useFoodDataMutate } from "../hooks/useFoodDataMutate";
import { FoodData } from "../interface/FoodData";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      />
    </>
  );
};

const CreateModal = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const { mutate } = useFoodDataMutate();

  const submit = () => {
    const foodData: FoodData = {
        title,
        price,
        image
    }
    mutate (foodData)
  }

  return (
    <div className="modal-overLay">
      <div className="modal-body">
        <h2>Cadastre um novo produto.</h2>
        <form className="input-container">
          <Input label="Nome do Produto" value={title} updateValue={setTitle} />
          <Input label="preço" value={price} updateValue={setPrice} />
          <Input label="Imagem" value={image} updateValue={setImage} />
        </form>
        <button onClick={submit}className="btn-post">Postar</button>
      </div>
    </div>
  );
};

export { CreateModal };
