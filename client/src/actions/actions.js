import { getApi, postApi, deleteApi, updateApi } from './fethches'

// Actions
export const GET_TODOS = 'GETTING_TODOS';
export const POST_TODOS = 'POSTING_TODOS';
export const new_Input = 'NEW_INPUT'
export const DELETE_TODO = 'DELETING_TODO'
export const CHANGE_INPUT = 'CHANGE_INPUT'
export const UPDATE_TODO = 'UPDATING_TODO'

// ActionCreator
export function getTodo(result){
    return{
        type: GET_TODOS,
        payload: result
    };
}

export function postTodo(result){
    return{
        type: POST_TODOS,
        payload: result
    };
}

export function deleteTodo(result){
    return{
        type: DELETE_TODO,
        payload: result
    }
}

export function newInput(title){
    return{
        type: new_Input,
        title
    }
}

export function changeInput(title, id){
    return {
        type: CHANGE_INPUT,
        title,
        id
    }
}

export function updateTodo(result){
    return{
        type: UPDATE_TODO,
        payload: result
    }
}

export function loadTodos() {

  return function (dispatch) {
    return getApi().then(
      result => dispatch(getTodo(result)),
      error => console.log('The Sandwich Shop', error)
    );
  };
}

export function addTodo(todo){
    return function (dispatch) {
        return postApi(todo).then(
            result => dispatch(postTodo(result)),
            error => console.log('The post shop', error)
        );
  };
}

export function removeTodo(todo){
    return function (dispatch) {
        return deleteApi(todo).then(
            result => dispatch(deleteTodo(result)),
            error => console.log('The post shop', error)
        );
  };
}

export function putTodo(id, title){
    return function (dispatch) {
        return updateApi(id, title).then(
            result => dispatch(updateTodo(result)),
            error => console.log('The op', error)
        );
    };
}