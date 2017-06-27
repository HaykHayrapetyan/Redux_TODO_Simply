import React, { PureComponent } from 'react';
import PropTypes  from 'prop-types';
import Todos from './todos'
import { connect } from 'react-redux'
import {newInput} from '../actions/actions'
import { addTodo, putTodo } from '../actions/actions'

class Form extends PureComponent{
    // static propTypes = {
    //     onSubmit: PropTypes.func.isRequired
    // };
    constructor(props){
        super(props);
    }

    handleSubmit = () => {
        this.props.addTodo({
            title: this.props.input
        })
  
    }

    handleEdit = () => {
        this.props.putTodo(this.props.editId, this.props.input)
    }

    handleCHangetitle = (e) => {       
        const title = e.target.value;
        this.props.newInput(title)
    }

    render(){
       
        return(
            <div>
                <input type="text" value={this.props.input} onChange={this.handleCHangetitle}/>
                { this.props.mode == 'add' ? 
                    <button onClick={this.handleSubmit}>{this.props.mode}</button> :
                    <button onClick={this.handleEdit}>{this.props.mode}</button> }    
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
        addTodo: (a) => dispatch(addTodo(a)),
        newInput: (b) => dispatch(newInput(b)),
        putTodo: (c, d) => dispatch(putTodo(c, d))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);