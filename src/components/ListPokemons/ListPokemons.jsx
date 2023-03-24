import { useEffect, useState } from "react"
import axios from 'axios'
import DisplayPokemons from "./DisplayPokemons";

export default function ListPokemons() {

    const [pokemons, setPokemons] = useState([
        {"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"}
    ]);
    
   const getPokemons = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
        .then((respuesta) => {
            setPokemons(respuesta.data.results);
        })
   }

   
   useEffect(() =>  {
        getPokemons();
   },[pokemons.length])

  return(
    <div>
        <DisplayPokemons pokemones={pokemons} /> 
    </div>
  )
}

