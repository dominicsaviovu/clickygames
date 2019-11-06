import React from "react";
import "./style.css";

function ClickItem(props) {
  return (
    <div
      role="img"
      aria-label="click item"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${props.image})` }}
      className={`click-item${props.shake ? " shake" : ""}`}
    />
  );
}

export default ClickItem;
