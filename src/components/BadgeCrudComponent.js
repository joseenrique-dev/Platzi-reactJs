import React, { Component } from "react";
import { Link } from "react-router-dom";

class BadgeCrudComponent extends Component {
  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <Link To="/#">
            <img
              src="dist/images/Header__background.png"
              className="card-img-top"
              alt="image header"
            />
          </Link>
          <div className="card-body">
            <div className="container" id="BadgeListPerson">
              <div className="row">
                <div className="col-sm offset-sm-2">
                  <img src="dist/images/Avatar.png" width="50%" />
                </div>
                <div className="col-sm">
                  <h5 className="h5 NameBadge">
                    Don't, <br />
                    call!
                  </h5>
                </div>
              </div>
            </div>
            <div className="footer offset-md-5">
              <h4>Engineer Frontend</h4>
              <br />
              <h5>@twitter</h5>
              <div className="col-sm offset-md-7">
                <Link className="btn btn-sm btn-primary">Add</Link >
                <Link className="btn btn-sm btn-danger">Delete</Link >
                <Link className="btn btn-sm btn-warning">Edit</Link >
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeCrudComponent;
