import React from 'react'
import {useState} from 'react'
import { useSelector } from 'react-redux'
import  './filter.css'

import Task from './Task'
import Tasklist from './Tasklist'

function Filter() {
    const tasklist = useSelector(state => state.tasklist)
    const [sort, setSort]= useState("")
    const filtrage=(sort)=>{
        if(sort==="all"){
            return  <Tasklist/>

            
        }
        if(sort==="done"){
            return tasklist.map((el)=> (el.isDone==true) ?<Task key={el.id} el={el}/> :null)

            
        }
         if(sort==="notdone"){
            return tasklist.map((el)=> (el.isDone==false) ?<Task  key={el.id} el={el}/> :null)
        }
        return <Tasklist/>
       
    }

    return (
        <div>
            <div className='filt'>
            <button onClick={()=>setSort("all")}>all</button>
            <button onClick={()=>setSort("done")} >done</button>
            <button onClick={()=>setSort("notdone")}>not done</button>
            </div>
            <div className='list'>
            {filtrage(sort)}
            </div>
        </div>
       
    )
}

export default Filter
