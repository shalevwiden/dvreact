import React from "react";

import unidata from "./universitydata.json";
import "./universityul.scss";

export default function universityul() {
  return (
    <ul className="universityul">
      {unidata.map((uni) => (
        <li className="universitybox" id={`${uni.abrv}box`} key={uni.abrv}>
          <a href={uni.link}>{uni.name}</a>
        </li>
      ))}

      <li className="universitybox" id="utsabox">
        The University of Texas at San Antonio
      </li>
    </ul>
  );
}
