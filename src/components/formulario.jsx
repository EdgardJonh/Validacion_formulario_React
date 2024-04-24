import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [confirmacionEmail, setConfirmacionEmail]= useState("")
  const [edad, setEdad] = useState("");
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail]= useState(false)
  const [errorEdad, setErrorEdad] = useState(false)
  const validarInput = (e) => {
    //prevenimos el comportamiento por defecto
    e.preventDefault();
    //Validacion de edad
    // Validar emaillo
    if(email !== confirmacionEmail){
        setErrorEmail(true)
        return
    }
    //validacion del input
    if (nombre == "" || apellido=="" || email=="" || edad=='') {
      setError(true);
      return;
    }
    
    if(edad<18){
        setErrorEdad(true)
        return
    }
    
    setError(false);
    setErrorEmail(false)
    setErrorEdad(false)
    setNombre('')
    setApellido('')
    setEdad('')
    setEmail('')
    setConfirmacionEmail('')
  };
  return (
    <div className="col p-3 bg-light rounded">
      <form onSubmit={validarInput} className="formulario">
        <div className="form-group">
          <label>Nombre </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label>Email </label>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Confirmacion Email </label>
          <input
            type="text"
            className="form-control"
            name="confirmacionEmail"
            onChange={(e) => setConfirmacionEmail(e.target.value)}
            value={confirmacionEmail}
          />
        </div>
        {errorEmail? <p>Los email no son ideticos!</p>:null}
        <div className="form-group">
          <label>Apellido</label>
          <input
            type="text"
            className="form-control"
            name="apellido"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </div>
        <div className="form-group">
          <label>Edad </label>
          <input
            type="text"
            className="form-control"
            name="edad"
            onChange={(e) => setEdad(e.target.value)}
            value={edad}
          />
        </div>
        {errorEdad ? <p>Debes ser mayor de edad para enviar formulario!</p>:null}

        <button className="btn btn-primary mt-2" type="submit">
          Enviar
        </button>
        {error ? <p className="error">Todos los campos son obligatorios</p> : null}
      </form>
    </div>
  );
};
export default Formulario;
