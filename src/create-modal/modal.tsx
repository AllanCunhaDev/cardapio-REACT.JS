import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../hooks/useFoodDataMutate";
import { FoodData } from "../interface/FoodData";
import "./modalStyle.css";


interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}
interface ModalProps{
  closeModal():void
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

const CreateModal = ({closeModal}: ModalProps) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const { mutate, isSuccess, isLoading } = useFoodDataMutate();


  const submit = () => {
    const foodData: FoodData = {
        title,
        price,
        image
    }
    mutate (foodData)
  }

  useEffect(()=>{
    if(!isSuccess) return
    closeModal();
  },[isSuccess])

 
  return (
    <div className="modal-overLay">
      <div className="modal-body">
        <h2>Cadastre um novo Produto.</h2>
        <form className="input-container">
          <Input label="Nome do produto" value={title} updateValue={setTitle} />
          <Input label="Preço" value={price} updateValue={setPrice}/>
          <Input label="Imagens" value={image} updateValue={setImage} />
        </form>
        <button onClick={submit}className="btn-post">
          {isLoading ? "Postando..." : "Postar"}
        </button>
      </div>
    </div>
  );
};

export { CreateModal };


