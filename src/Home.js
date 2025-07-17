import osuTitle from './assets/opt_title.png';
import questions from './questions';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();

  const [checkedItems, setCheckedItems] = useState(Array(100).fill(false));

  const toggleCheckbox = (index) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  const calculateScore = () => {
    return checkedItems.filter(Boolean).length;
  };

  const submit = () => {
    const score = calculateScore();
    navigate('/results', { state: { score } });
  };

  const clear = () => {
    if (window.confirm("Are you sure you want to clear all checkboxes?")) {
      setCheckedItems(Array(100).fill(false));
    }
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img className={styles.AppTitle} src={osuTitle} alt="OSU Purity Test" />
        <h1>
          The OSU Purity Test is a fun and revealing quiz designed specifically for Ohio State students! Inspired by the classic Rice Purity Test, this questionnaire measures your college experiences—Buckeye-style. From campus traditions to late-night adventures, see how your OSU purity score stacks up against your friends!
        </h1>
        <div className={styles.CheckboxContainer}>
          {questions.map((question, index) => (
            <label key={index} className={styles.CheckboxLabel}>
              <input
                type="checkbox"
                checked={checkedItems[index]}
                onChange={() => toggleCheckbox(index)}
              />{" "}
              {`${index + 1}. ${question}`}
            </label>
          ))}
        </div>
      </header>
      <div className={styles.ButtonContainer}>
        <button onClick={submit}>Calculate</button>
        <button onClick={clear}>Clear Checkboxes</button>
      </div>
    </div>
  );
}

export default Home;
