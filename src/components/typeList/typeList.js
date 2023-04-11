import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TypeList() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [pokemonOfType, setPokemonOfType] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      setTypes(response.data.results);
    };
    fetchTypes();
  }, []);

  const handleTypeChange = async (event) => {
    const type = event.target.value;
    setSelectedType(type);
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    setPokemonOfType(response.data.pokemon.map(p => p.pokemon));
  };

  return (
    <div>
      <h2>Select a type:</h2>
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="">--Select a type--</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>{type.name}</option>
        ))}
      </select>
      {pokemonOfType.length > 0 && (
        <div>
          <h2>Pokémon of type {selectedType}:</h2>
          <ul>
            {pokemonOfType.map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TypeList;