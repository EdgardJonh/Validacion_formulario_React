import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import HomePage from "./views/HomePage";
import Personajes from "./views/Personajes"
import Navegacion from "./components/Navegacion";
import Contacto from "./views/Contacto";
import Footer from "./components/footer";
import NotFound from "./views/NotFound"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navegacion></Navegacion>
      <div className="contenedor">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Personajes" element={<Personajes />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
