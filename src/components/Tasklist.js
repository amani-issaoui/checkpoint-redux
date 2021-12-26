import React from 'react'
import {useSelector} from 'react-redux'
import Task from './Task'
function Tasklist() {
    const tasklist = useSelector(state => state.tasklist)
    return (
        <div>
            {tasklist.map((el)=> <Task key={el.id} el={el}/>)}
        </div>
    )
}

export default Tasklist
