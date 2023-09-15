import React from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "../hooks/SearchContext";

const Navbar = () => {
  const { searchValue, setSearchValue } = useSearchContext();

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Navbar
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchValue}
              onChange={handleSearchInputChange}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;