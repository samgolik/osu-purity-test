import { useLocation, useNavigate } from "react-router-dom";

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;

  return (
    <div className="App">
      <h2>Your Score: {score}</h2>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default Results;
