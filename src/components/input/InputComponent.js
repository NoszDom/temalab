import React, { useState } from "react";
import "./inputStyle.css";

function InputComponent(props) {
  const [taskText, setTaskText] = useState("");

  return (
    <div className="myController">
      <div className="dayLabel">
        {props.selectedDay.toLocaleString({
          month: "2-digit",
          day: "2-digit",
          weekday: "short",
        })}
      </div>

      <form className="myInputBar">
        <input
          className="inputBox"
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button
          className="btn-Add"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            props.setTasks([
              ...props.tasks,
              { keyProp: props.selectedDay.toLocaleString(), value: taskText },
            ]);
          }}
        >
          +
        </button>
      </form>
    </div>
  );
}

export default InputComponent;
