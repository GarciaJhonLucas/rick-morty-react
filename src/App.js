import { useState } from 'react';
import './App.css';
import Characters from './components/characters';
import Episodes from './components/Episodes';
import imageRickMorty from './img/rick-morty.png';

function App() {

  const [characters, setCharacters] = useState(null);
  const [episodes, setEpisodes] = useState(null);

  const reqApiCharacters = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

  const reqApiEpisodes = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/episode');
    const episodesApi = await api.json();
    setEpisodes(episodesApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
        <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          episodes ? (
            <Episodes episodes={episodes} setEpisodes={setEpisodes}/>
            ) : (
            <>
            <img src={ imageRickMorty } alt='Rick & Morty' className='img-home'/>
            <div>
              <button onClick={reqApiCharacters} className='btn-search'>Search Characters</button>
              <button onClick={reqApiEpisodes} className='btn-search'>Search Episodes</button>
            </div>
            </>
            )
        )}

      </header>
    </div>
  );
}

export default App;
