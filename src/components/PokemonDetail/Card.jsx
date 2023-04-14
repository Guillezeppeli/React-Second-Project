import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Card({pokemon}) {

    const [onePokemon, setOnePokemon] = useState({
        name: '',
        sprites: {front_default: ''},
        height:  '',
        weight: '',
        types: [
            {type:
                {name: '',
            }}]
    });
    
    const datosPokemon = (url) => {
        axios.get(url)
        .then((respuesta) => {
            console.log(respuesta.data);
            setOnePokemon(respuesta.data)
        })
    }

    useEffect(() => {
        datosPokemon(pokemon.url)
    },[pokemon.url])
  
    return (

    <div style={{display: 'inline-block'}}>
            <div className='card'>
            <div className='card-header text-black'>{onePokemon.name}</div>
            <div className='card-body'>
            <img src={onePokemon.sprites.front_default} alt="imagen pokemon" />
                    <h1 className='card-title text-black'>Dato Pokemon</h1>
                    <p className='card-text text-black'>Altura: {onePokemon.height}</p>
                    <p className='card-text text-black'>Peso: {onePokemon.weight}</p>
                    <p className='card-text text-black'>Tipo: {onePokemon.types[0].type.name}</p>
                </div>
            </div>
        </div>
  )
}
