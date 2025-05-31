import './App.css';
import phrases from './data/phrases.json';



function App() {
  const phrase = () => {
    let n = 0
    n = Math.floor(Math.random() * phrases.length)
    console.log("Hola desde la función");
    return phrases[n]
  };
  const onePhrase = phrase()
  return (
    <div className="App">
      <header className="App-header">
        <h3>"{onePhrase['title']}"</h3>
        <p>- {onePhrase['author']}</p>
        <a href="https://github.com/dimasx010/tu-frase" target="_blank" rel="noreferrer">🔗 Source</a>
      </header>
    </div>
  );
}

export default App;
