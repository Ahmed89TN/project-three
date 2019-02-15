import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer-distributed">

			<div className="footer-left">

				<p className="footer-company-name">WORLD VIEW&copy; 2019</p>

			</div>

			<div className="footer-right">

				<form method="get" action="#">
					<input placeholder="Search our website" name="search" />
					<i className="fa fa-search"></i>
				</form>

			</div>

		</footer>
  );
}

export default Footer;