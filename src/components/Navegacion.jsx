import { Link } from "react-router-dom";
const Navegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ">
        <div className="d-flex justify-content-between">
          <div>
            <Link className="navbar-brand" to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg"
                alt=""
                style={{ width: "12%" }}
              ></img>
            </Link>
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Personajes" className="nav-link">
                Personajes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contacto" className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navegacion;
