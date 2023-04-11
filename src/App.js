import './App.css';
import Navbar from './components/Navbar/navBar';
import PokemonSearch from './components/pokemonSearch/pokemonSearch';
import TypeList from './components/typeList/typeList';

function App() {
  return (
    <div className="App">
       <Navbar name="Pokedex" />
      <header className="App-header">
        <PokemonSearch pokeLink="https://www.pokeapi.co/api/v2/pokemon" />
        <TypeList />
      </header>
    </div>
  );
}

export default App;
