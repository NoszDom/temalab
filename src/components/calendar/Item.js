import "./calendarStyle.css";
import TaskOnItem from "./TaskOnItem";
import React from "react";

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
      <TaskOnItem tasks ={props.tasks} day = {props.day}/>
    </div>
  );
}

export default Item;
