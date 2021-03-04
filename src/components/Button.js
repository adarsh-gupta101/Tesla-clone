import React from "react";
import "./button.css";

function Button({ primary, Dark }) {
  return (
    <div className="button">
      <a className="Primary"> {primary}</a>
      <a className="Dark">{Dark}</a>
    </div>
  );
}

export default Button;
