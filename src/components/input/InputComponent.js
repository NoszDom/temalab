import React, { useState } from 'react';
import {DateTime} from 'luxon';
import Task from './Task';
import './inputStyle.css'

function InputComponent(props){

    const [taskText, setTaskText] = useState('');

    return (
        <div className = 'myController'>
             <label className = 'dayLabel'>{props.selectedDay.toLocaleString()}</label>

             <form className='myInputBar'>
                <input type="text" value = {taskText} onChange={(e) => setTaskText(e.target.value)}/>
                <button
                type="submit"
                onClick={(e) => {
                     e.preventDefault();
                    props.setTasks([...props.tasks, <Task key = {props.selectedDay.toLocaleString()} value= {taskText} />]);
                   
                }}>
                    Add
                </button>
            </form>

        </div>
    );
}

export default InputComponent;