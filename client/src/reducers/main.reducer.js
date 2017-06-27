import {GET_TODOS, POST_TODOS, new_Input, DELETE_TODO, CHANGE_INPUT, UPDATE_TODO} from '../actions/actions'

const initialState = {
    todos: [],
    mode: 'add',
    input: '',
    editId: ''
}

export default function(state = initialState, action){
    const {type} = action;

    switch (type){
        case GET_TODOS:
            return {...state, todos: action.payload}
        case POST_TODOS:
            console.log(action.payload)
            return {...state, todos: action.payload, input: '' }
        case DELETE_TODO:
            return {...state, todos: action.payload}
        case CHANGE_INPUT:
            return {...state, input: action.title, mode: 'edit', editId: action.id}
        case UPDATE_TODO:
            return {...state, todos: action.payload, mode: 'add', editId: ''}
        case new_Input:
            return {...state, input: action.title}
        default:
            return state;
    }
}