import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Conference Badges
        </Link>
        
      </nav>
    );
  }
}
export default Nav;