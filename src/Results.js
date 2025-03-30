import { useLocation, useNavigate } from "react-router-dom";
import osuTitle from './assets/OSU_purity_title.PNG';

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;

  function back() {
    navigate("/");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={osuTitle} alt="OSU Purity Test" />
        <div className="checkbox-container">
          <h1>Your score:</h1>
          <h2>{100 - score}</h2>
        </div>
      </header>
      <div className="button-container">
        <button className="back-button" onClick={back}>Back</button>
      </div>
    </div>
  );
}

export default Results;
