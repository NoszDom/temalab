import React, {useState} from 'react';
import './App.css';
import Calendar from './components/calendar/Calendar';
import InputComponent from './components/input/InputComponent';
import {DateTime} from 'luxon';


function initItems(actualDay){
  const items = [];
  
  var now = actualDay;
  var firstDay = now.minus({days: now.day-1});

  var lastDay = firstDay.plus({days: firstDay.daysInMonth-1});

  if (firstDay.weekday !== 1) firstDay = firstDay.minus({days: firstDay.weekday-1});
  if (lastDay.weekday !== 7) lastDay = lastDay.plus({days: 7-lastDay.weekday});

  var iteratorDay = firstDay;

  while (iteratorDay<lastDay){
      var rows = [iteratorDay,
        iteratorDay.plus({days: 1}),
        iteratorDay.plus({days: 2}),
        iteratorDay.plus({days: 3}),
        iteratorDay.plus({days: 4}),
        iteratorDay.plus({days: 5}),
        iteratorDay.plus({days: 6})
      ];
      iteratorDay = iteratorDay.plus({days: 7});
      items.push(rows);
  }

  return items;
}


function App() {

  const [actualDay, setActualDay] = useState(DateTime.local(DateTime.local().year, DateTime.local().month, DateTime.local().day));
  const [actualItems, setActualItems] = useState(initItems(actualDay));
  const [tasks, setTasks] = useState([]);

  

  return (
    <div id = "App" className = 'myApp'>
      <div className = 'myAppComponent myInput'>
        <InputComponent selectedDay = {actualDay} tasks = {tasks} setTasks = {setTasks} onSubmit = {(t) => setTasks(t)}/>
      </div>
      
      <div className = 'myAppComponent myCalendar'>
        <Calendar items = {actualItems}  actualDay = {actualDay} onClick = {(i) => setActualDay(i)}/>
      </div>

      <div id = "taskList" className='myTasks'>
                    {tasks.map((task)=>{
                    if (task.key === actualDay.toLocaleString())
                    {return ( task );}
                    else{return null;}})}
      </div>
    
    </div>
  );
}

export default App;
