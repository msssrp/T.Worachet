import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "../hooks/SearchContext";
import { useAuthContext } from "../hooks/AuthContext";
const Navbar = () => {
  const { searchValue, setSearchValue } = useSearchContext();

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const { user, logout } = useAuthContext()


  const handleLogout = () => {
    logout()
    document.cookie = `token=; Max-Age=0`;
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
            {user && user.roles && user.roles.some(role => role.name === "admin") && <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add
              </Link>
            </li>}
            {!user &&
              <li className="nav-item">
                <Link className="nav-link" to="/signUp">Sign Up</Link>
              </li>
            }
            {user && user.id ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={handleLogout} to="/">Logout</Link>
                </li>
              </>
            ) : <li className="nav-item">
              <Link className="nav-link" to="/signIn">Sign In</Link>
            </li>}
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
