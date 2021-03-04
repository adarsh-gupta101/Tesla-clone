import React from "react";
import Button from "./Button";
import "./car.css";
const Caritem = ({ image, description, name, twobutton, darkb, Primarb }) => {
  return (
    <div className="Caritem" style={{ backgroundImage: `url(${image})` }}>
      <div className="Caritem__body">
        <h1 className="Caritem__name">{name}</h1>
        <p className="Caritem__desc">{description}</p>{" "}
      </div>
      <div className="buttons">
        {twobutton ? (
          <Button primary={Primarb} Dark={darkb} />
        ) : (
          <a className="aa">{darkb} </a>
        )}
      </div>
    </div>
  );
};

export default Caritem;
