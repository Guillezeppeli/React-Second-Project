import Card from "../PokemonDetail/Card"

export default function DisplayPokemons({pokemones}) {

  return (
    <div>
        { pokemones.map((pokemon,indice) => 
            <Card key={indice} pokemon={pokemon}/>
        )}
    </div>
  )
}
