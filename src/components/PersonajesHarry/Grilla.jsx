import { useState } from "react";
import MyCards from "./MyCards";
import Buscador from "./Buscador";
const Grilla = ({ persona }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = persona.filter((item) =>
    item.personaje.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Buscador handleSearch={handleSearch} searchTerm={searchTerm}></Buscador>
      <div className="row d-flex justify-content-evenly">
      {filteredData &&
        filteredData.map((estasPersonas) => (
          <MyCards lasPersonas={estasPersonas} key={estasPersonas.id}></MyCards>
        ))}
      </div>
  
    </div>
  );
};
export default Grilla;
