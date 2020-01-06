import React, { Component } from "react";

class Form extends Component {
 
  render() {
    return (
      <div className="col-md-6">
      <div className="col-md-9 offset-md-2 mt-5" id="formAttendant">
        <article id="NewAttendant">
          <h1>NEW ATTENDANT</h1>
        </article>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="FirstName"
             
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="LastName"
            />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              className="form-control"
              name="email"
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              className="form-control"
              name="jobtitle"
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              type="text"
              className="form-control"
              name="twitter"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="terms"
            />
            <label className="form-check-label">
              i accept the terms of service and privacy policy
            </label>
          </div>
          <div className="form-group ">
            <button
              type="submit"
              
              className="btn btn-primary btn-lg btn-block"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    );
  }
}
export default Form;
