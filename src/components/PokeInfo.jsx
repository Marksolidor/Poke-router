import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PokeInfo = () => {
  const [pokemon, setPokemon] = useState("");

  const { name } = useParams();

  useEffect(() => {
    const getAPI = async () => {
      try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const datos = await resp.json();
        setPokemon(datos);
      } catch (err) {}
    };

    getAPI();
  }, [name]);

  return (
    <>
      {pokemon && (
        <>
          <h1 className="poke-name">{pokemon.name}</h1>
          <div className="poke-container">
            <div className="poke-card">
              <img
                className="poke-img"
                src={pokemon.sprites?.other["official-artwork"].front_default}
              ></img>
              <h4 className="type-title">Tipo</h4>
              <div className="pokemon-type">
                {pokemon.types.map((type, idx) => {
                  return (
                    <div key={idx} className="pokemon-type-text">
                      <h4>{type.type.name}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="poke-stats">
              <h4 className="text">
                Puntos de Salud: {pokemon.stats[0].base_stat}
              </h4>
              <h4>Ataque: {pokemon.stats[1].base_stat}</h4>
              <h4>Defensa: {pokemon.stats[2].base_stat}</h4>
              <h4>Ataque Especial: {pokemon.stats[3].base_stat}</h4>
              <h4>Defensa Especial: {pokemon.stats[4].base_stat}</h4>
              <h4>Velocidad: {pokemon.stats[5].base_stat}</h4>
            </div>
          </div>

          <div className="text-center">
            <Link to={`/pokemons`}>
              <button type="button" className="btn btn-success">
                Volver a Pokémon
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default PokeInfo;
