import React from "react";
import "./inputStyle.css";

function TaskList(props) {
  var index = 0;

  return (
    <ul className="taskList">
      {props.tasks.map((task) => {
        if (task.keyProp === props.actualDay.toLocaleString()) {
          index = index + 1;
          return (
            <li tabindex={index} className="task">
              {task.value}
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
}

export default TaskList;
