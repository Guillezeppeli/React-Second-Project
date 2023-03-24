
import './App.css';
import ListPokemons from './components/ListPokemons/ListPokemons';
import Navbar from './components/Navbar/Navbar';
import Search from './components/SearchPokemon/Search';

function App() {

  return (
    <div className="App">
      <Navbar name="Pokedex" />
      <header className="App-header">
      <Search pokeLink="https://www.pokeapi.co/api/v2/pokemon" />
      <ListPokemons />
      </header>
    </div>
  );
}

export default App;
