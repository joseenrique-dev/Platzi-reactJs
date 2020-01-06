import React, { Component, Fragment } from "react";
import Header__background from "../images/Header__background.png";
import Avatar from "../images/Avatar.png";
class BadgeComponent extends Component {


  render() {
    return (
        <div className="col-md-6">
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
                    <img width="99%" src={Avatar} />
                  </div>
                  <div className="col-sm">
                    <h1 className="offset-md-2 mt-5 mr-5 mt-4">
                      {this.props.firstName} <br />
                      {this.props.LastName}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="alert alert-dark mt-5" role="alert">
                <h1 className="offset-md-5"> {this.props.jobtitle}</h1>
                <br />
                <h3 className="offset-md-5"> @{this.props.twitter}</h3>
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
export default BadgeComponent;
