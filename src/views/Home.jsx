import { Link } from "react-router-dom";

const Home = () => (
  <>
    <div className="description">
      <img
        className="img-fluid"
        alt="Profesor Oak intro from origial games"
        src="https://pa1.narvii.com/7100/8c94343fe2f5c815e8cc26672dd56c8095c4d65dr1-480-432_hq.gif"
      ></img>
      <p>
        Mi nombre es Profesor Oak, me dedico a investigar a las criaturas
        llamadas Pokemon. Podras observar mis hallazgos en la region de Kanto{" "}
        <Link to={`/pokemons`}>aqui</Link>.
      </p>
    </div>
  </>
);

export default Home;
