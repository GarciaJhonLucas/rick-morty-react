import { useState } from 'react';
import './App.css';
import Characters from './components/characters';
import imageRickMorty from './img/rick-morty.png';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApiCharacters = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
        <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
        <>
        <img src={ imageRickMorty } alt='Rick & Morty' className='img-home'/>
        <button onClick={reqApiCharacters} className='btn-search'>Search</button>
        </>
        )}
      </header>
    </div>
  );
}

export default App;
