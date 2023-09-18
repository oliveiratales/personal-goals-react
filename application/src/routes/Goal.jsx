import { useNavigate, useParams, Link } from "react-router-dom";
import dataFetch from "../axios/config";
import useToast from "../hook/useToast";
import { useState, useEffect } from "react";
import './Goal.css'

const Goal = () => {
  const { id } = useParams();

  const [goal, setGoal] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadGoal = async () => {
      const res = await dataFetch.get(`/goals/${id}`);

      setGoal(res.data);
    };

    loadGoal();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  const handleDelete = async () => {
    const res = await dataFetch.delete(`/goals/${id}`);

    if (res.status === 201) {
      navigate("/");
      useToast(res.data.msg);
    }
  };

  if (!goal) return <p>Carregando...</p>;

  return (
    <div className="goal-card">
      <img src={goal.image} alt={goal.name} />
      <h1>{goal.name}</h1>
      <div className="action-container">
        <Link className="btn" to={`/goal/edit/${goal._id}`}>Editar</Link>
        <button className="btn-secundary" onClick={handleDelete}>
          Excluir
        </button>
      </div>
      <span><strong>Descrição:</strong> {goal.description}</span>
      <span><strong>Data de Início:</strong> {formatDate(goal.initialDate)}</span>
      <span><strong>Data de Término:</strong> {formatDate(goal.finalDate)}</span>
    </div>
  );
};

export default Goal;
