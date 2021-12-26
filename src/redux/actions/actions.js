import { ADD_TASK,EDIT_TASK,DELETE_TASK,COMPLETED_TASK } from '../constants/ActionsTypes'
 export const add=(task)=>{
    return{type: ADD_TASK,
        payload:task};
}
export const edit=(id,editedTask)=>{
    return{type:EDIT_TASK,
    payload:{id,editedTask}}
}
export const deleteTask=(id)=>{
    return{type:DELETE_TASK,
    payload:id}
}
export const completed=(id)=>{
    return{type:COMPLETED_TASK,
    payload:id}
}