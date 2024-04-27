import "bootstrap/dist/css/bootstrap.min.css";
const MyCards = ({ lasPersonas }) => {
  return (
    <div
      className="card shadow p-3 mb-5 bg-body-tertiary rounded"
      style={{ width: "18rem" }}
    >
      <img src={lasPersonas.imagen} className="card-img-top" alt="" />
      <div className="card-body">
        <p>{lasPersonas.personaje}</p>
        <hr />
        <p>{lasPersonas.casaDeHogwarts}</p>
        <hr />
        <p className="card-text">{lasPersonas.interpretado_por}</p>
      </div>
    </div>
  );
};
export default MyCards;
