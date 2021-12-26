import {ADD_TASK,EDIT_TASK,DELETE_TASK,COMPLETED_TASK} from '../constants/ActionsTypes'


const initialState={
    tasklist:[
        {id:1,
        description:"buy something",
        isDone:false 

        },
        {
            id:2,
            description:" eat something",
            isDone:false 
        }
    ]
}
 export const reducer=(state= initialState,action)=>{
    switch(action.type){
        case  ADD_TASK:
        const newTask={
            id:state.tasklist.length +1,
            description:action.payload,
            isDone:false
        } ;
        const taskTab=[...state.tasklist,newTask]   ;
        return{...state,tasklist:taskTab};
        case  EDIT_TASK:
            return {...state,tasklist: state.tasklist.map(el => el.id ==action.payload.id ? {...el, description:action.payload.editedTask } : el) };
       case  COMPLETED_TASK:
        return {...state,tasklist: state.tasklist.map(el => el.id ==action.payload ? {...el,isDone:true} : el) };
        case DELETE_TASK:
            return {...state,tasklist: state.tasklist.filter(el => el.id !=action.payload ? el : null) };
            default:return state;

    }
}
