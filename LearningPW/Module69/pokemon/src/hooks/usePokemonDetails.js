import axios from "axios";
import { useState } from "react";
import usePokemonList from "./usePokemonList";

function usePokemonDetails(id){
  const [pokemon, setPokemon] = useState({})

   async function dawnloadPokemon() {
    
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      weight: response.data.weight,
      height: response.data.height,
      types: response.data.types.map((t) => t.type.name)
    })

    setPokemonListState({...pokemonListState, pokedexUrl: `https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name: 'fire'}` })
  }

 const [pokemonListState, setPokemonListState ] = usePokemonList( true)

  useEffect(() => {
    dawnloadPokemon()
    console.log('list', pokemonListHookResponse.pokemonListState)
  }, [])
  return [pokemon , pokemonListState]
}

export default usePokemonDetails;