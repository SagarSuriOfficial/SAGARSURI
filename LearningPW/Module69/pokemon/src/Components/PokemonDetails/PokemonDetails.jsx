import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./PokemonDetails.css"
import usePokemonList from "../../hooks/usePokemonList";
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, pokemonListState] = usePokemonDetails(id)
  return (
    <div className="pokemon-details-wrapper">
      <img className="pokemon-image" src={pokemon.image} />
      <div className="pokemon-name"> {pokemon.name}</div>
      <div className="pokemon-name" > <span>height:</span> {pokemon.height}</div>
      <div className="pokemon-name"><span>weight:</span> {pokemon.weight}</div>
      <div className="pokemon-details-types">
        {pokemon.types && pokemon.types.map((t) => <div key={t}> {t} </div>)}
      </div>

      {
        pokemon.types && pokemonListState.pokemonList &&
        <div>
          more {pokemon.types[0]} type of Pokemons

          <ul>
            { pokemonListState.pokemonList.map((p)=> <li key={}>{}</li> )}
          </ul>
        </div>
      }
     
    </div>
  )
}

export default PokemonDetails;