import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";

const SearchPkm = () => {
  const { data } = useContext(Context);
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const handle = (event) => {
    const character = event.target.value;
    if (character && character !== "") {
      setName(character);
    }
  };

  const goPokemon = (name) => {
    navigate(`/pokemons/${name}`);
  };

  return (
    <>
      <div className="search">
        {console.log(data)}
        <h2 className="title">Selecciona un Pokémon para ver sus estadisticas</h2>
        <select
          className="form-select"
          onChange={(event) => goPokemon(event.target.value)}
        >
          <option value="">pokemon</option>
          {data.results.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>
              {" "}
              {pokemon.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SearchPkm;