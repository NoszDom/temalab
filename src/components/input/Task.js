import React from "react";
import "./inputStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function Task(props) {
  return (
    <div className="task">
      <div>{props.task.value}</div>
      <button
        className="btn-Delete"
        onClick={() => {
          const tempList = props.tasks.filter(
            (iteratorTask) => iteratorTask !== props.task
          );
          props.setTasks(tempList);
        }}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </button>
    </div>
  );
}

export default Task;
