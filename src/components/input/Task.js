import React from "react";
import "./inputStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

async function deleteTask(date, text) {
  var urldate = date.replaceAll("/", "_");
  await axios
    .delete("https://localhost:5001/api/schedule/" + urldate + "/" + text)
    .then((res) => console.log(res.status));
}

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
          deleteTask(props.task.keyProp, props.task.value);
          props.setTasks(tempList);
        }}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </button>
    </div>
  );
}

export default Task;
