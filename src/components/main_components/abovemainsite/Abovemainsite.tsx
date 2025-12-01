import React from "react";
import "./abovemainsite.scss";

function Abovemainsite() {
  return (
    <div className="abovemainsite">
      <div className="topnav">
        {/* comments */}
        <img src="" alt="" id="minimagnifyingglass" />
      </div>
      <div className="hero">
        <div className="lefthero">
          <h1 className="heading">DegreeView</h1>
          <p className="subheading">
            Might as well see some nice college course statistics. Also we got
            some Excel and csv files. We have uncovered some nice insights on
            course data you wont get anywhere else on the web.
            <br />
            <br />
            Animate any table on any page, with 6 diferent animation options.
          </p>
          <button className="cta">See Schools</button>
        </div>
        <div className="righthero">
          <img src="images/excellogo.png" alt="" id="excelicon" />
          <img src="images/barchart.webp" alt="" id="barchart" />
          <img src="images/csvicon.png" alt="" id="csvicon" />
          <img src="images/htmltable.png" alt="tableicon" id="tableicon" />
          <img src="images/piecharticon.png" alt="" id="piechart" />
        </div>
      </div>
    </div>
  );
}

export default Abovemainsite;
