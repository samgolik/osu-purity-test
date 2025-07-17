import { useLocation, useNavigate } from "react-router-dom";
import osuTitle from './assets/OSU_purity_title.PNG';
import styles from './Results.module.css';


function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;

  function back() {
    navigate("/");
  }

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={osuTitle} alt="OSU Purity Test" />
        <div className={styles.CheckboxContainer}>
          <h1>Your score:</h1>
          <h2>{100 - score}</h2>
        </div>
      </header>
      <div className={styles.ButtonContainer}>
        <button className={styles.BackButton} onClick={back}>Back</button>
      </div>
    </div>
  );
}

export default Results;
