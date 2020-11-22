import React from "react";
import "./navBarStyle.css";

function NavBar(props) {
  const text = props.month.year + ". " + props.month.monthLong;

  return (
    <div className="navBar">
      <div onClick={() => props.prevClick()} className="arrow"S>
        ◄
      </div>
      <div className="navText">{text}</div>
      <div onClick={() => props.nextClick()} className="arrow">
        ►
      </div>
    </div>
  );
}

export default NavBar;
