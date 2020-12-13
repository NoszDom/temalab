import React from "react";
import "./inputStyle.css";
import Task from "./Task";


function TaskList(props) {
  var index = 0;

  return (
    <ul className="taskList">
      {props.tasks.map((task) => {
        if (task.keyProp === props.actualDay.toLocaleString()) {
          index = index + 1;
          return (
            <li className="taskLi" key={index}>
              <Task task = {task} tasks = {props.tasks} setTasks={props.setTasks}/>
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
