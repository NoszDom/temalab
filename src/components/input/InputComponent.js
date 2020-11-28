import React, { useState } from "react";
import "./inputStyle.css";
import axios from "axios";

function InputComponent(props) {
  const [taskText, setTaskText] = useState("");

  async function createTask(day, text) {
    await axios
      .post("https://localhost:5001/api/schedule", {
        year: day.year,
        month: day.month,
        day: day.day,
        text: text,
      })
      .then((res) => console.log(res.status));
  }

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
            if (taskText !== "") {
              props.setTasks([
                ...props.tasks,
                {
                  keyProp: props.selectedDay.toLocaleString(),
                  value: taskText,
                },
              ]);
              createTask(props.selectedDay, taskText);
              setTaskText("");
            }
          }}
        >
          +
        </button>
      </form>
    </div>
  );
}

export default InputComponent;
