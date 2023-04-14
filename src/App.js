import './App.css';
import ListPokemons from './components/ListPokemons/ListPokemons';
import Navbar from './components/Navbar/Navbar';
import Search from './components/SearchPokemon/Search';
import PokemonProvider from './components/PokemonProvider/PokemonProvider';





function App() {

  return (
    <div className="App">
      <Navbar name="Pokedex" />
      <PokemonProvider />
      <header className="App-header">
      <Search pokeLink="https://www.pokeapi.co/api/v2/pokemon" />
      <ListPokemons />
      </header>
    </div>
  );
}

export default App;

