import React, { createContext, useContext, useEffect, useState } from "react";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [typesList, setTypesList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await response.json();
      setPokemonList(data.results);
    };
    fetchPokemonList();
  }, []);

  useEffect(() => {
    const fetchTypesList = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/type");
      const data = await response.json();
      setTypesList(data.results);
    };
    fetchTypesList();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonList, typesList }}>
      {children}
    </PokemonContext.Provider>
  );
};

const PokemonList = () => {
  const { pokemonList } = useContext(PokemonContext);

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
};

const FilteredList = ({ filterType }) => {
  const { pokemonList } = useContext(PokemonContext);

  const filteredList = pokemonList.filter((pokemon) =>
    pokemon.types.includes(filterType)
  );

  return (
    <div>
      {filteredList.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
};

const PokemonApp = () => {
  const { typesList } = useContext(PokemonContext);
  const [filterType, setFilterType] = useState("");

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  return (
    <div>
      <select value={filterType} onChange={handleFilterChange}>
        <option value="">All</option>
        {typesList.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const App = () => {
  return (
    <PokemonProvider>
      <PokemonApp />
    </PokemonProvider>
  );
};

export default App;
