import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImgProvider from "./context";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import SearchPkm from "./views/SearchPkm"
import PokeInfo from "./components/PokeInfo";

export default function App() {
  return (
    <ImgProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<SearchPkm />} />
          <Route path="/pokemons/:name" element={<PokeInfo />} />
        </Routes>
      </BrowserRouter>
    </ImgProvider>
  );
}
