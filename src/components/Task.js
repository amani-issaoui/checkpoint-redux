import React from 'react'
import './task.css'
import  { useState } from 'react'
import { useDispatch } from 'react-redux'
import {edit,completed, deleteTask} from '../redux/actions/actions'

function Task({el}) {
    const [editTask, setEditTask] = useState(false)
    const [input, setInput] = useState(el.description)
    
    const dispatch = useDispatch()
    const handleClick=()=>{
        if(editTask){
            setEditTask(!editTask)
            dispatch(edit(el.id,input))
        }
        setEditTask(!editTask)
    }
 const handleCompleted=()=>{
    dispatch(completed(el.id));
   
}

    
 

    return (
        <div className='task'>
          <div className="left">
           {!editTask ? <h3>{el.description}</h3> : <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>}
           </div>
            <div className="right">
            <button  className='but edit' onClick={handleClick}>{!editTask ? "Edit" : "save"}</button>
            <button className='but completed' onClick={handleCompleted}>{el.isDone ? "done" :"not done" }</button>
            <button className='but delete' onClick={()=>dispatch(deleteTask(el.id))}>delete</button>
            </div>
        </div>
    )
}

export default Task
