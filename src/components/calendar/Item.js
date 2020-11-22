import React, { useState } from "react";
import { DateTime } from "luxon";
import "./calendarStyle.css";

function Item(props) {
  var currentClass = "myItem";
  if (props.day.month !== props.actualMonth.month) {
    currentClass = "myItem notThisMonth";
  }
  if (props.day.equals(props.actualDay)) {
    currentClass = "myItem selectedDay";
  }

  return (
    <div className={currentClass} onClick={() => props.onClick()}>
      <div className="dot">{props.day.day}</div>
    </div>
  );
}

export default Item;
