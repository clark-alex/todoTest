import axios from 'axios'


const initialState = {
    tasks: [],
    taskID: 0
}

const ADD_TASK = "ADD_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const GET_TASKS = "GET_TASKS";
const EDIT_TASK = "EDIT_TASK";
const DELETE_TASK="DELETE_TASK"
const COMPLETE="COMPLETE"
export function complete(id){
    let ans = axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(res=>res.data)
    console.log(ans)
    return {
        type: COMPLETE,
        payload: ans
    }
}
export function editTask(id, obj){
   let ans = axios.patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, obj).then(res=>res.data)
   console.log(ans)
   return {
       type: EDIT_TASK,
       payload: ans
   }
}
export function deleteTask(id){
   let ans = axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(res=>res.data)
   console.log(ans)
   return {
       type: DELETE_TASK,
       payload: ans
   }
}
export function addTask(title) {
    return {
        type: ADD_TASK,
        payload: title
    }
}

export function completeTask(id) {
    return {
        type: COMPLETE_TASK,
        payload: id
    }
}

export function removeTask(id) {
    return {
        type: REMOVE_TASK,
        payload: id
    }
}
export function getTasks() {
    let allTasks = axios.get('https://practiceapi.devmountain.com/api/tasks').then(res => res.data)
    console.log(allTasks)
    return {
        type: GET_TASKS,
        payload: allTasks
    }

}

export default function tasks(state = initialState, action) {
    switch (action.type) {
    
        case DELETE_TASK + '_FULFILLED':
            return Object.assign({}, state, { tasks: action.payload })
        case GET_TASKS + '_FULFILLED':
            return Object.assign({}, state, { tasks: action.payload })
        case EDIT_TASK + '_FULFILLED':
            return Object.assign({}, state, { tasks: action.payload })
        case COMPLETE + '_FULFILLED':
            return Object.assign({}, state, { tasks: action.payload })
        case ADD_TASK:
            return {
                tasks: [...state.tasks, { id: state.taskID, title: action.payload, description: "", completed: false }],
                taskID: state.taskID + 1
            }
        case COMPLETE_TASK:
            const { tasks, taskID } = state;
            var i = tasks.findIndex(task => task.id === action.payload);;
            return {
                tasks: tasks.slice(0, i)
                    .concat(Object.assign({}, tasks[i], { completed: true }))
                    .concat(tasks.slice(i + 1, tasks.length)),
                taskID: taskID
            }
        case REMOVE_TASK:
            return {
                tasks: state.tasks.filter(task => task.id !== action.payload),
                taskID: state.taskID
            }



        default: return state;
    }
}
