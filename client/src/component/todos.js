import React, {PureComponent} from 'react'
import {connect } from 'react-redux'
import {removeTodo, changeInput} from '../actions/actions'

class Todos extends PureComponent{
    constructor(props){
        super(props)
        console.log(props)
        
    }

deleteFunc = (id) => {
    console.log(id)
    this.props.removeTodo(id);
}

editFunc = (id, title) => {
    this.props.changeInput(title, id)
}
    

    render(){
      
      
        return(
            <div>
                {this.props.todos.map((todo) => 
                <div key={todo._id}>
                    <h4 >{todo.title}</h4>
                    <button onClick={() => this.editFunc(todo._id, todo.title)}>Edit</button>
                    <button onClick={() => this.deleteFunc(todo._id)}>Delete</button>                       
                </div>)}
            </div>   
        )
    }
}


function mapStateToProps(state){
    return {
        todos: state.todos,
        mode: state.mode,
        input: state.input,
        editId: state.editId
    }
}

function mapDispatchToProps(dispatch){
    return{
        removeTodo: (id) => dispatch(removeTodo(id)),
        changeInput: (b, c) => dispatch(changeInput(b, c))
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);