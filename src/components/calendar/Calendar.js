import React from 'react';
import DayOfWeek from './DayOfWeek';
import Item from './Item';
import './calendarStyle.css'


function Calendar(props){
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    var items = props.items;
    

    return(
    <div>
        <div className = 'days'>
            {days.map(
                function(day){
                    return <DayOfWeek key= {day} text = {day} />;
                }
            )}
        </div>

        <div> 
        {items.map((row, i) => (
          <div key={i}>
            {row.map((col, j) => (
              <Item day = {col} actualDay = {props.actualDay} onClick = {() => props.onClick(col)}/>
            ))}
          </div>
        ))}
      </div>
    </div>

    );
}

export default Calendar;