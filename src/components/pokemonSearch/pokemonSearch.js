import React, { useState } from 'react';

function PokemonSearch() {
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleSearch = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    setPokemon(data);
  }

  return (
    <div>
      <label htmlFor="name-input">Search by name:</label>
      <input id="name-input" type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleSearch}>Search</button>
      {pokemon && (
        <div>
          <h2>{`${pokemon.name} (#${pokemon.id})`}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <ul>
            {pokemon.types.map((type) => (
              <li key={type.slot}>{type.type.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonSearch;

