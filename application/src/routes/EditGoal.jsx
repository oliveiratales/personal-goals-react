import dataFetch from "../axios/config";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateGoal.css";

import useToast from "../hook/useToast";

const EditGoal = () => {
  const [goal, setGoal] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadGoal = async () => {
      try {
        const res = await dataFetch.get(`/goals/${id}`);
        setGoal(res.data);
      } catch (error) {
        useToast(error.response.data.msg);
      }
    };

    loadGoal();
  }, [id]);

  const updateGoal = async (e) => {
    e.preventDefault();

    try {
      const res = await dataFetch.put(`/goals/${goal._id}`, goal);
      if (res.status === 200) {
        navigate(`/goal/${id}`);
      }
    } catch (error) {
      useToast(error.response.data.msg);
    }
  };

  if (!goal) return <p>Carregando...</p>;

  return (
    <div className="form-page">
      <h1 className="edit-h1">Editando: {goal.name}</h1>

      <form onSubmit={(e) => updateGoal(e)}>
        <label>
          <span>Nome da Meta:</span>
          <input
            type="text"
            placeholder="Escreva o nome da sua meta..."
            required
            onChange={(e) => setGoal({ ...goal, name: e.target.value })}
            value={goal.name}
          />
        </label>
        <label>
          <span>Descreva sua meta:</span>
          <input
            type="text"
            placeholder="Descreva sua meta..."
            required
            onChange={(e) => setGoal({ ...goal, description: e.target.value })}
            value={goal.description}
          />
        </label>
        <label>
          <span>Quando você vai iniciá-la?</span>
          <input
            type="date"
            required
            onChange={(e) => setGoal({ ...goal, initialDate: e.target.value })}
            value={goal.initialDate}
          />
        </label>
        <label>
          <span>Quando você vai finalizá-la?</span>
          <input
            type="date"
            required
            onChange={(e) => setGoal({ ...goal, finalDate: e.target.value })}
            value={goal.finalDate}
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            placeholder="Insira a URL de uma imagem..."
            required
            onChange={(e) => setGoal({ ...goal, image: e.target.value })}
            value={goal.image}
          />
        </label>
        <input type="submit" value="Atualizar meta" className="btn-create" />
      </form>
    </div>
  );
};

export default EditGoal;
