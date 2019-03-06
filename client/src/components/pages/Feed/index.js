import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./style.css";

class Feed extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    axios.get(`/Feed/${this.props.current._id}`).then((response) => {
        this.setState({
          results: response.data[0].following
        });
      });
      
    }
  
  render() {
    return(
      <div className="container">
        <center><h2>Friends</h2></center>
        <div className="content row" 
        style={{paddingLeft: "1rem",
        paddingRight: "1rem", 
        fontSize: "15px",
        height: "350px",
        position: "relative"}}>
      <div className="list-group" style={{listStyleType: "none", position: "relative", float: "left"}}>
        {
          this.state.results.map((User) => {
            // create a route-able link for each product
            return (
              <div className="list-group-item" key={User._id} style={{ marginTop: "18px", boxShadow: "0 3px 6px #999, 0 3px 6px #999",position: "relative", float: "left"}}>
                <div className="name-container"><center><Link to={`/fprofile/${User._id}`} className="name">{User.name}</Link></center></div>
                <div className="img-container" style={{ height: "60%",
              overflow: "hidden",  textAlign: "center", background:"#6CADDC", boxShadow: "0 3px 6px #999, 0 3px 6px #999"}}>
              <img alt={User.name} src={User.image} style={{width: "100%"}}/>
              </div>
                <p><strong>Country:</strong> {User.country} </p>
                <p><strong>Age:</strong> {User.age} </p>
                <p><strong>Favorite food:</strong> {User.faveFood} </p>
                <p><strong>Favorite song:</strong> <a target="_blank" rel="noopener noreferrer" href={User.songLink}>{User.faveSong}</a> </p>
                <p><strong>Favorite Location:</strong> {User.favePlace} </p>
                <p><strong>Fun Fact:</strong> {User.funFact} </p> 
              </div>
            );
          })
        }
      </div>
      </div>
      </div>
    );
  }
}

export default Feed;



