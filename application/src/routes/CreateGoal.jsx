import dataFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateGoal.css";

import useToast from "../hook/useToast";

const CreateGoal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const createGoal = async (e) => {
    e.preventDefault();

    try {
      const goal = {
        name,
        description,
        initialDate,
        finalDate,
        image
      };
      const res = await dataFetch.post("/goals", goal);
  
      if (res.status === 201) {
        navigate("/");
        useToast(res.data.msg, res.status);
      }   
    } catch (error) {
      useToast(error.response.data.msg, "error");
    }
  }
  return (
    <div className="form-page">
      <h1 className="create-h1">Crie Sua Meta</h1>
      <p className="goal-description">
        Defina sua próxima meta pessoal e matenha o foco!
      </p>

      <form onSubmit={(e) => createGoal(e)}>
        <label>
          <span>Nome da Meta:</span>
          <input
            type="text"
            placeholder="Escreva o nome da sua meta..."
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Descreva sua meta:</span>
          <input
            type="text"
            placeholder="Descreva sua meta..."
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <label>
          <span>Quando você vai inicia-la?</span>
          <input
            type="date"
            required
            onChange={(e) => setInitialDate(e.target.value)}
            value={initialDate}
          />
        </label>
        <label>
          <span>Quando você vai finaliza-la?</span>
          <input
            type="date"
            required
            onChange={(e) => setFinalDate(e.target.value)}
            value={finalDate}
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="texto"
            placeholder="Insira a URL de uma imagem..."
            required
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <input type="submit" value="Criar nova meta" className="btn-create" />
      </form>
    </div>
  );
};

export default CreateGoal;
