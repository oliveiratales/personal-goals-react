import dataFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  const [goals, setGoals] = useState(null);

  // Load goals
  useEffect(() => {
    const loadGoals = async () => {
      const res = await dataFetch.get("/goals");

      setGoals(res.data);
    };

    loadGoals();
  }, []);

  // Function to truncate text to a specified length
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  };

  if (!goals) return <p className="loading">Carregando...</p>;

  return (
    <div className="home">
      <h1>Suas Metas</h1>
      <div className="goals-container">
        {goals.length === 0 && <p>Insira suas metas para visualizá-las aqui!</p>}

        {goals.map((goal) => (
          <div className="goal" key={goal._id}>
            <img src={goal.image} alt={goal.title} />
            <h3>{goal.name}</h3>
            <p>{truncateText(goal.description, 35)}</p>
            <Link to={`/goal/${goal._id}`} className="details-btn">
              Visualizar meta
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

