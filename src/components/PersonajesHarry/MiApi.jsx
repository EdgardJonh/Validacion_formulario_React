import { useState, useEffect } from "react";

import Grilla from "./Grilla";
const MiApi = () => {
  //envio personajes ala vista
  const [personajes, setPersonajes] = useState([]);
  //  FUNCION QUE PERMITE HACER UNA PETICION A UNA API DE PERSONAJES DE HARRY POTTER
  const obtenerInfo = async () => {
    try {
      // Realizo la peticion
      let info = await fetch(
        "https://harry-potter-api.onrender.com/personajes"
      );
      // Tranformo un json
      let rsult = await info.json();
      //PASO EL RSULT COMO ARGUMENTO A LA FUNCION QUE ACTUALIZA EN EL HOOKS USEsTATE
      // replaza el array vacio por result
        setPersonajes(rsult)
      //   console.log(personajes)
    } catch (error) {
      console.log(error);
    }
  };
  // USE EFECT PERMITE EJECUTAR LA FUNCION OBTENERINFO SOLO UNA VEZ CAUNDO SE CARGE LA PAGINA, CONTIENE UNA DEPENDECIA
  useEffect(() => {
    obtenerInfo();
  }, []);
  const character = {
	
  }
  return (
      <div>
        <Grilla persona={personajes}></Grilla>
      </div>
      
  );
};
export default MiApi;
