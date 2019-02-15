import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./style.css";

class Country extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    // after component loads, get all products from db
    axios.get(`/Country/${this.props.match.params.name}`).then((response) => {
      this.setState({
        results: response.data
      });
    });
  }

  
//cards, with youtube link music(favmusic) instead of image, name, age and country
  render() {
    return (
      <div className="container">
           <center><h1>{this.props.match.params.name}</h1></center>
        <div className="content" >
      <ul className="list-group" >
        {
          this.state.results.map((User) => {
            // create a route-able link for each product
            return (
              <li className="list-group-item" key={User._id}>
              <div className="img-container">
              <img alt={User.name} src={User.image} style={{width: "100%"}}/>
              </div>
                <center><Link className="name" to={`/fprofile/${User._id}`}>{User.name}</Link></center>
              </li>
            );
          })
        }
      </ul>
      </div>
      </div>
    );
  }
}

export default Country;
