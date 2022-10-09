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
        <h2 className="title pt-5">
          Selecciona un Pokémon para ver sus estadisticas
        </h2>
        <select
          className="form-select"
          onChange={(event) => goPokemon(event.target.value)}
        >
          <option value="">Pokemon</option>
          {data.results.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>
              {" "}
              {pokemon.name}
            </option>
          ))}
        </select>
        <div className="pikachu">
          <img
            alt="running pikachu"
            className="img-fluid"
            src="https://64.media.tumblr.com/02f44b33d0f465fea65327f50f977a69/tumblr_mkw8c4xTSz1r67h3uo1_250.gif"
          ></img>
        </div>
      </div>
    </>
  );
};

export default SearchPkm;
