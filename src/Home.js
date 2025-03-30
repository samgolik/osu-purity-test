import osuTitle from './assets/opt_title.png';
import questions from './questions';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const checkboxes = Array.from({ length: 100 }, (_, i) => ({
    id: `checkbox-${i + 1}`,
    label: ` ${i + 1}. ${questions[i]}`,
  }));

  const calculateScore = () => {
    const score = checkboxes.reduce((count, item) => {
      const checkbox = document.getElementById(item.id);
      return checkbox.checked ? count + 1 : count;
    }, 0);
    return score;
  };

  const submit = () => {
    const score = calculateScore();
    navigate('/results', { state: { score } });
  }

  const clear = () => {
    checkboxes.forEach(item => {
      const checkbox = document.getElementById(item.id);
      checkbox.checked = false;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-title" src={osuTitle} alt="OSU Purity Test" />
        <h1>The OSU Purity Test is a fun and revealing quiz designed specifically for Ohio State students! Inspired by the classic Rice Purity Test, this questionnaire measures your college experiences—Buckeye-style. From campus traditions to late-night adventures, see how your OSU purity score stacks up against your friends!</h1>
        <div className="checkbox-container">
          {checkboxes.map((item) => (
            <label key={item.id} className="checkbox-label">
              <input type="checkbox" id={item.id} /> {item.label}
            </label>
          ))}
        </div>
      </header>
      <div className="button-container">
        <button className="calculate-button" onClick={submit}>Calculate</button>
        <button className="clear-button" onClick={clear}>Clear Checkboxes</button>
      </div>
    </div>
  );
}

export default Home;
