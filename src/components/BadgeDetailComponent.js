import React, { Component } from "react";
import "../App.css";
import "jquery/dist/jquery.js";
import "bootstrap/dist/css/bootstrap.css";
import Header__background from "../images/Header__background.png";
import Avatar from "../images/Avatar.png";
class Home extends Component {
  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <img
            src={Header__background}
            className="card-img-top"
            alt="image header"
          />
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <img className="offset-md-4" width="70%" src={Avatar} />
                </div>
                <div className="col-sm">
                  <h1 className="offset-md-2 mt-5">
                    Hello, <br />
                    World!
                  </h1>
                </div>
              </div>
            </div>
            <div className="alert alert-dark mt-5" role="alert">
              <h1 className="offset-md-5">Junior dev</h1>
              <br />
              <h3 className="offset-md-5">@DevCode</h3>
            </div>
            <div className="footer offset-md-5">
              <h5 id="Badgefooter ml-5"> #Footer </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
