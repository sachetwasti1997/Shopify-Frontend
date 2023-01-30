import React from "react";
import classes from "./spinner.css";
import icon from "../assets/Skateboarding.gif"

const Spinner = () => {
    return (
      <div style={{
        "display": "grid",
        "justifyContent": "center",
        "alignItems": "center",
        "height": "100%",
        "width": "100%"
      }}>
        <img src={icon} alt="Loading"/>
      </div>
    );
}

export default Spinner;