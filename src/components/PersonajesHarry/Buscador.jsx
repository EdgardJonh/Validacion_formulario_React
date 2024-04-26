const Buscador = ({handleSearch , searchTerm})=>{
    return(
        <input 
        style={{width: '20rem'}}
        className="form-control m-4"
          type="text"
          placeholder="Buscar personajes"
          value={searchTerm}
          onChange={handleSearch}
        />
    )
}

export default Buscador