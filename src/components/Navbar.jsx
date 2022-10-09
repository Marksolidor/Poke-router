import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");

  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div>
        <img
          className="icon"
          alt="pokeball pin logo"
          src="https://cdn-icons-png.flaticon.com/512/287/287224.png"
        ></img>
      </div>
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink className={setActiveClass} end to="/">
                <img
                  alt="home circular icon with a pokestop in the street"
                  className="icon"
                  src="https://cdn-icons-png.flaticon.com/512/188/188983.png"
                ></img>
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className={setActiveClass} to="/pokemons">
                <img
                  className="icon"
                  alt="smartphone with a pokeball in the middle"
                  src="https://cdn-icons-png.flaticon.com/512/188/188937.png"
                ></img>
                Pokémons
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
