import React from "react";
import axios from "axios";
import "./style.css";

class FProfile extends React.Component {
  state = {
    results: {},
    followData: {},
    unfollowData:{},
    check:true
  };

  componentDidMount() {
    // after component loads, get all products from db
    axios.get(`/fprofile/${this.props.match.params._id}`).then((response) => {
      this.setState({
        results: response.data
      });

    }).then(response => console.log(response)).catch(err => console.log(err))

  }

  follow = () => {
    axios.put(`/api/User/${this.props.current._id}/${this.props.match.params._id}`).then((response) => {
      // update state object with newest data
      this.setState({
        followData: response.data,
        check :false
      });
    });
  };

  unfollow = () => {
    axios.put(`/api/UserUnfollow/${this.props.current._id}/${this.props.match.params._id}`).then((response) => {
      // update state object with newest data
      this.setState({
        unfollowData: response.data,
        check:true
      });
    });
  };
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header" style={{ backgroundColor: "rgb(237, 252, 254)" }}><h1><strong><center>{this.state.results.name}</center></strong></h1></div>
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={this.state.check? this.follow:this.unfollow}
          >
           {this.state.check? <h1>Follow  <i class="glyphicon glyphicon-plus"></i><i class="glyphicon glyphicon-user"></i></h1> : <h1>Unfollow <i class="glyphicon glyphicon-remove"></i><i class="glyphicon glyphicon-user"></i></h1>}
          </button>
          {/* <button
            className="btn btn-outline-primary btn-lg"
            onClick={this.unfollow}
          >
            <h2>Unfollow</h2>
          </button> */}
          <div className="card-body">
            <img className="img-profile" alt={this.state.results.name} src={this.state.results.image} style={{ width: "100%", marginBottom: "50px", boxShadow: "0 3px 6px #999, 0 3px 6px #999" }} />
            <h1><strong>Name:</strong> {this.state.results.name}</h1>
            <h1><strong>Age:</strong> {this.state.results.age}</h1>
            <h1><strong>Country:</strong> {this.state.results.country}</h1>
            <h1><strong>Music:</strong> <a target="_blank" rel="noopener noreferrer" href={this.state.results.songLink}>{this.state.results.faveSong}</a></h1>
            <h1><strong>Food:</strong> {this.state.results.faveFood}</h1>
            <h1><strong>Place:</strong> {this.state.results.favePlace}</h1>
            <h1><strong>Did you know?:</strong> {this.state.results.funFact}</h1>
            <br />

          </div>
        </div>
      </div>
    );
  }
}
export default FProfile;