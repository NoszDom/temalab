import React from 'react';
import {DateTime} from 'luxon';
import './inputStyle.css'


function Task({value}){
    return(
     <div>
        {value}
    </div>
    );
}

export default Task;