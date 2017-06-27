import React, { Component } from 'react';
import Header from './Header'
import Form from './form';
import Todos from './todos'
import { Provider, connect } from 'react-redux'
import store from '../store'
import { getTodos, decrement, loadTodos } from '../actions/actions'


class App extends Component{
    constructor(){
        super();
        // this.state = {
        //     todos: [],
        //     mode: 'add',
        //     input: '',
        //     editId: ''
        // };

        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.Put = this.Put.bind(this);
    }

    // getReqConf = (method, body) => {
    //     let reqConf = {
    //         method,
    //         credentials: "include",
    //         headers: {
    //             "Content-Type" : "application/json"
    //         }
    //     }

    //     if (body) {
    //         reqConf.body = JSON.stringify(body);
    //     }

    //     return reqConf;
    // }
    
    componentDidMount(){
        console.log(this.props.todos)
        store.dispatch(loadTodos());
        // console.log(store.getState(), "sasasa")
    //    store.dispatch()
    }


    render(){
        return(
            <div>
                <Form />             
                <Todos />
            </div>          
        );   
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

export default connect(mapStateToProps)(App);