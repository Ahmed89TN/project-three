import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class Profile extends Component {
  state = {
    results:{}
  };
  componentDidMount() {
    // check if user has already logged in successfully
    axios.get("/profile").then((res) => {
      this.setState({
        results: res.data
      });
    });
  }

  render() {
    return (
      <div className="profile">
      <div className="container">
      <div className="card">
      <div className="card-header" style={{backgroundColor:"rgb(237, 252, 254)"}}><h1><strong><center>{this.state.results.name}</center></strong></h1></div>
      <div className="card-body">
        <img alt={this.state.results.name} src={this.state.results.image} style={{width:"100%", boxShadow: "0 3px 6px #999, 0 3px 6px #999", maxHeight:"90%"}} />
        <br />
        <br />
        <h1><strong>Name:</strong> {this.state.results.name}</h1>
        <h1><strong>Age:</strong> {this.state.results.age}</h1>
        <h1><strong>Country:</strong> {this.state.results.country}</h1>
        <h1><strong>Music:</strong> <a target="_blank" rel="noopener noreferrer" href={this.state.results.songLink}>{this.state.results.faveSong}</a> </h1>
        <h1><strong>Food:</strong> {this.state.results.faveFood}</h1>
        <h1><strong>Place:</strong> {this.state.results.favePlace}</h1>
        <h1><strong>Did you know?:</strong> {this.state.results.funFact}</h1>
      </div>
    </div>
    </div>
    </div>
    );
  }
}

export default Profile;