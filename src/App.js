import { useState } from 'react';
import './App.css';


function App() {
  const [result, setResult] = useState([])
  const handleClick = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(response => {
        return response.json();
      }).then(response => {
        setResult(response.results);
        console.log(response);
      }).catch(err => {
        console.log(err);
      });
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Realizar peticion</button>
      <ul>
        {result.map((item, i) => <li key={i}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
