import React from 'react';
import './calendarStyle.css'

function DayOfWeek(props){
    const text = props.text;
    return (
    <div className = 'myDay' >
        {text}
    </div>
    )
}

export default DayOfWeek;