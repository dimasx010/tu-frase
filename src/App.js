import './App.css';
import phrases from './data/phrases.json';
import colors from './data/colors.json';



function App() {
  /* Generate random color background */
  const color = () => {
    let n = 0
    n = Math.floor(Math.random() * colors.length)
    return colors[n]
  };
  /* Generate random phrase */
  const phrase = () => {
    let n = 0
    n = Math.floor(Math.random() * phrases.length)
    return phrases[n]
  };
  /* Declare variables */
  const onePhrase = phrase()
  const oneColor = color()
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: oneColor }}>
        <h3>"{onePhrase['title']}"</h3>
        <p>- {onePhrase['author']}</p>
        <a href="https://github.com/dimasx010/tu-frase" target="_blank" rel="noreferrer">🔗 Source</a>
      </header>
    </div>
  );
}

export default App;
