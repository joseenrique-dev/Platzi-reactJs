import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ES
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/#">
                    Action
                  </a>
                  <a className="dropdown-item" href="/#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/#">
                  Cursos <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Horarios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Live
                </a>
              </li>
            </ul>
            <Link
              to="/create"
              className="btn btn-primary my-2 my-sm-0"
              type="button"
            >
              New Badge
            </Link>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar;
