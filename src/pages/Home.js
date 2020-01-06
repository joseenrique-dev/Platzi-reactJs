import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "jquery/dist/jquery.js";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbar";
import Nav from "../components/nav";
import BadgeComponent from "../components/BadgeComponent";
import Form from '../components/form';
import BadgeListComponent from "../components/BadgeListComponent";
import BadgeDetailComponent from "../components/BadgeDetailComponent";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
class Home extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      form: {
        FirstName: "",
        LastName: "",
        email: "",
        jobtitle: "",
        twitter: ""
      }
    };
  }
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }
  render() {
    return (
      <Router>
          <div className="container-fluid">
            <div className="row">
              <Navbar />
              <Nav />
              <Jumbotron />
              <Route exact path="/">
                <BadgeListComponent />
              </Route>
              <Route exact path="/detail">
                <BadgeDetailComponent />
              </Route>
              <Route exact path="/create">
                <BadgeComponent  
                firstName={this.state.form.FirstName}
                LastName={this.state.form.LastName}
                email={this.state.form.email}
                jobtitle={this.state.form.jobtitle}
                twitter={this.state.form.twitter}
                />
                <Form onChange={this.handleChange}
                formValues={this.state.form} />
              </Route>
              <Footer />
            </div>
          </div>
      </Router>
    );
  }
}

export default Home;
