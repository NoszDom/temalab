import React, { useState } from 'react';
import {DateTime} from 'luxon';
import './calendarStyle.css'




function Item(props){
    
    const [currentClass, setCurrentClass] = useState('myItem');

    if(currentClass === 'myItem' && props.day === props.actualDay) {setCurrentClass('myItem selectedItem');}
    else{
        if(currentClass === 'myItem selectedItem' && props.day !== props.actualDay) {setCurrentClass('myItem');}
    }

    return(
        <span>
            <div className = {currentClass} onClick = {()=> props.onClick()} >
                {props.day.day}
            </div>
        </span>
    );
}

export default Item;