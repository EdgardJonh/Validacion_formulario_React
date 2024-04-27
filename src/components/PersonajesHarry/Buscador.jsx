const Buscador = ({ handleSearch, searchTerm }) => {
  return (
    <div>
      <input
        style={{ width: "20rem" }}
        className="form-control m-4"
        type="text"
        placeholder="Buscar personajes"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Buscador;
