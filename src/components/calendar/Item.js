import React, { useState } from "react";
import { DateTime } from "luxon";
import "./calendarStyle.css";

function Item(props) {
  return (
    <div className="myItem" onClick={() => props.onClick()}>
      <div className="dot">{props.day.day}</div>
    </div>
  );
}

export default Item;