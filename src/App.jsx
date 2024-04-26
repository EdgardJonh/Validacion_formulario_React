import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import HomePage from "./views/HomePage";
import Personajes from "./views/Personajes"
import Navegacion from "./components/Navegacion";
import Contacto from "./views/Contacto";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navegacion></Navegacion>
      <div className="container" style={{margin: '0%', maxWidth:'100%'}}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Personajes" element={<Personajes />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
