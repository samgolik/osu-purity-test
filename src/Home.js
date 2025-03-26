import osuTitle from './assets/OSU_purity_title.PNG';
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={osuTitle} alt="OSU Purity Title" />
        <h2>Text goes here</h2>
        <div className="checkbox-container">
          {checkboxes.map((item) => (
            <label key={item.id} className="checkbox-label">
              <input type="checkbox" id={item.id} /> {item.label}
            </label>
          ))}
        </div>
      </header>
      <button onClick={submit}>Calculate</button>
    </div>
  );
}

export default Home;
