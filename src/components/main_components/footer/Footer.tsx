import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footerleft">
        <div className="links">
          <div className="tooltip">
            <a href="aboutpage.html">About</a>
          </div>

          <div className="tooltip">
            <a href="#biglogoid">Home</a>
          </div>

          <div className="tooltip">
            <a href="exceltemplates.html">Excel Templates Breakdown</a>
          </div>
        </div>
      </div>

      <div className="footerright">
        <img
          id="smalllogo"
          src="https://storage.googleapis.com/degreeview/degreeviewimages/minilogo.png"
          alt="smalldegreeviewlogo"
        />
        <p id="statement">DegreeView 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
