import React, { useEffect, useState } from "react";
import "./App.css";
import Calendar from "./components/calendar/Calendar";
import InputComponent from "./components/input/InputComponent";
import NavBar from "./components/navbar/NavBar";
import { DateTime } from "luxon";
import TaskList from "./components/input/TaskList";

function initItems(actualMonth) {
  const items = [];

  var firstDay = DateTime.local(actualMonth.year, actualMonth.month, 1);

  var lastDay = firstDay.plus({ days: firstDay.daysInMonth - 1 });

  if (firstDay.weekday !== 1)
    firstDay = firstDay.minus({ days: firstDay.weekday - 1 });
  if (lastDay.weekday !== 7)
    lastDay = lastDay.plus({ days: 7 - lastDay.weekday });

  var iteratorDay = firstDay;

  while (iteratorDay < lastDay) {
    var rows = [
      iteratorDay,
      iteratorDay.plus({ days: 1 }),
      iteratorDay.plus({ days: 2 }),
      iteratorDay.plus({ days: 3 }),
      iteratorDay.plus({ days: 4 }),
      iteratorDay.plus({ days: 5 }),
      iteratorDay.plus({ days: 6 }),
    ];
    iteratorDay = iteratorDay.plus({ days: 7 });
    items.push(rows);
  }
  return items;
}

function App() {
  const [actualDay, setActualDay] = useState(
    DateTime.local(
      DateTime.local().year,
      DateTime.local().month,
      DateTime.local().day
    )
  );
  const [actualMonth, setActualMonth] = useState(
    DateTime.local(DateTime.local().year, DateTime.local().month)
  );
  var actualItems = initItems(actualMonth);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    actualItems = initItems(actualMonth);
  }, [actualMonth]);

  return (
    <div id="App" className="myApp">
      <NavBar
        month={actualMonth}
        prevClick={() => {
          setActualMonth(actualMonth.minus({ month: 1 }));
        }}
        nextClick={() => {
          setActualMonth(actualMonth.plus({ month: 1 }));
        }}
      />

      <div className="secondRow">
        <div className="sideBar">
          <div className="myInput">
            <InputComponent
              selectedDay={actualDay}
              tasks={tasks}
              setTasks={setTasks}
              onSubmit={(t) => setTasks(t)}
            />
          </div>

          <div id="taskList" className="myTasks">
            <TaskList tasks={tasks} setTasks={setTasks} actualDay={actualDay} />
          </div>
        </div>

        <div className="myCalendar">
          <Calendar
            tasks={tasks}
            items={actualItems}
            actualDay={actualDay}
            actualMonth={actualMonth}
            onClick={(i) => setActualDay(i)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
