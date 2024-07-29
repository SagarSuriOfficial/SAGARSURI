import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";

function PockemonList() {

  const [ pokemonListState, setPokemonListState] = usePokemonList(false);


  return (
    <div className="pokemon-list-wrapper">
      {/* <div className="pokemon-list"> Pokemon List</div> */}
      <div className="pokemon-wrapper">
        {(pokemonListState.isLoading)
          ? "Loding...."
          : pokemonListState.pokemonList.map((p) => (
              <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
            ))}
      </div>
      <div className="controls">
      <button
          disabled={pokemonListState.preUrl == null}
          onClick={() => {
            const urlToSet = pokemonListState.preUrl
            setPokemonListState({...pokemonListState, pokedexUrl: urlToSet})
          }}>Prev</button>

        <button
          disabled={pokemonListState.nextUrl == null}
          onClick={() => {
            const urlToSet = pokemonListState.nextUrl
            setPokemonListState({...pokemonListState, pokedexUrl: urlToSet})
          }}>Next</button>
      </div>
    </div>
  );
}
export default PockemonList;
