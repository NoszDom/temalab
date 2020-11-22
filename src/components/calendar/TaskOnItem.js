import "./calendarStyle.css";
import React from "react";

function TaskOnItem(props) {
  var index = 0;
  return (
    <div className="tasksOnItem">
      {props.tasks.map((task) => {
        if (task.keyProp === props.day.toLocaleString()) {
          index = index + 1;
          return (
            <div>
              <div className="bulletPoint" />
              <div className="bulletPointText">{task.value}</div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default TaskOnItem;
