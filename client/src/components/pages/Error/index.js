import React from "react";
import "./style.css";
import errormap from './emars.jpg';

function ErrorPage() {
  return (
    <div>
      <center>
        <br />
      <h1>PAGE NOT FOUND</h1>
      <img src={errormap} alt="" style={{width: "75%", height:"75%"}}/>
      <h2>
        Everything else is Supercalifragilisticexpialidocious! 
      </h2>
        <h3>
        Try saying that backwards and take a deep breath...now just go back to the map page
        </h3>
      </center>
    </div>
  );
}

export default ErrorPage;
