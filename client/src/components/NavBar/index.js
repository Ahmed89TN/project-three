import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo1wv from "./logo1wv.png";

// import logo from './logo.jpeg'; // with import

//box shadow boxShadow: "4px 8px #b2b6cb",
function NavBar(props) {
  let link;
  let link1;
  let link2;
  let link3;
  let link4;
  let link5;
  let link6;

  if (props.nav) {
    link = <li className="nav-item">
      <Link to="/" className={window.location.pathname === "/map" ? "nav-link active" : "nav-link"}>
        <h3><i className="glyphicon glyphicon-globe"></i> MAP</h3>
      </Link>
    </li>
  }
  if (props.nav) {
    link1 = <li className="nav-item">
      <Link to="/Feed" className={window.location.pathname === "/Feed" ? "nav-link active" : "nav-link"}>
        <h3><i className="glyphicon glyphicon-user"></i><i className="glyphicon glyphicon-user"></i> FRIENDS</h3>
      </Link>
    </li>
  }
  if (props.nav) {
    link2 = <li className="nav-item">
      <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
        <h3><i className="glyphicon glyphicon-user"></i> PROFILE</h3>
      </Link>
    </li>
  }
  if (!props.nav) {
    link4 = <li className="nav-item2">
      <Link to="/signup" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
        <h3><i className="glyphicon glyphicon-plus"></i>SIGN UP</h3>
      </Link>
    </li>
  }
  if (!props.nav) {
    link5 = <li className="nav-item3">
      <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"} >
        <h3><i className="glyphicon glyphicon-log-in"></i> LOG IN</h3>
      </Link>
    </li>
  }
  if (props.nav) {
    link6 = <li className="nav-item ">
      <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"} onClick={props.handleLogOut}>
        <h3><i className="glyphicon glyphicon-log-out"></i>LOG OUT</h3>
      </Link>
    </li>
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  {/* <div class="collapse navbar-collapse" id="navbarNavDropdown"> */}
        <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              <img src={logo1wv} className="logo" alt="world-view" style={{ height: "20", width: "30" }} />

            </Link>
          </li>
          <li> {link}</li>
          <li> {link1}</li>
          <li> {link2}</li>
          <li> {link3}</li>
          <li> {link4}</li>
          <li> {link5}</li>
        </ul>
        <ul className="nav">
          <li> {link6}</li>
        </ul>
        {/* </div> */}
      </nav>
    </div>
  );
}

export default NavBar;



