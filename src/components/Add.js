import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {add} from '../redux/actions/actions'
import './add.css'

function Add() {
 const [test, setTest] = useState("");
 const dispatch = useDispatch();
 
 const handleSubmit=(e)=>{
     e.preventDefault();
     dispatch(add(test));
     setTest("");
 };

 const handleChange=(e)=>{
     setTest(e.target.value);
 };

    return (
        <div className="add">
            <h1>TODO LIST APP</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={test}/>
            
            <button >Add</button>
            </form>
        </div>
    )
}

export default Add
