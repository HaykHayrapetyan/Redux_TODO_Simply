import React, { Component } from 'react';
import Header from 'Header'
import Form from './form';
import Submit from './submit'
import Todos from './todos'


class App extends Component{
    constructor(){
        super();
        this.state = {
            todos: [],
            mode: 'add',
            input: '',
            editId: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.Put = this.Put.bind(this);
    }

    getReqConf = (method, body) => {
        let reqConf = {
            method,
            credentials: "include",
            headers: {
                "Content-Type" : "application/json"
            }
        }

        if (body) {
            reqConf.body = JSON.stringify(body);
        }

        return reqConf;
    }
    
    componentDidMount(){
        const reqUrl = "http://localhost:3030/api/todos";
        const reqConf = this.getReqConf('GET');
        console.log('did mount')
        fetch(reqUrl, reqConf).then(result => {
            return result.json()
         }) 
        .then(result => { 
            console.log(result)
            this.setState({
                todos: result,
                mode: 'add',
                input: '',
                editId: ''
            })
        
         })
        .catch(function(error) {
        console.log(error.toString())
        });   
    }

    handleSubmit = (Credentials) => {
        this.setState({
            todos: this.state.todos.concat(Credentials)
            
        })
        const reqUrl = "http://localhost:3030/api/todos";
        const reqConf = this.getReqConf("POST", {title: Credentials.title});
        
        fetch(reqUrl, reqConf)
        .then(result => {
            return result.json()
        }) 
        .then(result => {
           this.setState({
               todos: result,
                mode: 'add',
                input: '',
                editId: ''               
           })                   
        })
        .catch(function(error) {
            alert(error.toString())
        });  
        
    }

    handleEdit = (todo) => {
        this.setState({
            todos: this.state.todos,
            mode: 'edit',
            input: todo.title,
            editId: todo._id           
        })    
    }

    handleDelete = (id) => {
        
        const reqUrl = "http://localhost:3030/api/todos/"+id;
        const reqConf = this.getReqConf("DELETE");
        fetch(reqUrl, reqConf)
        .then(result => {
            return result.json()
        }) 
        .then(result => {
           this.setState({
               todos: result,
               mode: 'add',
               input: '',
               editId: ''
           })
            
        })
        .catch(function(error) {
            alert(error.toString())
        });   
    }

    handleInputChange(newInput, mode) {
        this.setState({
            todos: this.state.todos,
            mode: mode,
            input: newInput,
            editId: ''
        })
    }

    Put() {
        console.log('aaaaaa')
        this.state.todos.forEach((todo) => {
            if(todo._id == this.state.editId) {

                const reqUrl = "http://localhost:3030/api/todos/"+todo._id;
                const reqConf = this.getReqConf("PUT", {title: this.state.input});
                fetch(reqUrl, reqConf)
                .then(result => {
                    return result.json()
                }) 
                .then(result => {
                    this.setState({
                        todos: result,
                        mode : 'add',
                        input: '',
                        editId: ''
                    })                  
                })
                .catch(function(error) {
                    console.log(error.toString())
                });            
            }
        })
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit} onPut={this.Put} mode={this.state.mode} input={this.state.input}  onInputChange={this.handleInputChange}/>             
                <Todos babgen = {this.state.todos} onEdit= { this.handleEdit } onDelete={this.handleDelete} />
            </div>          
        );   
    }   
}

export default App;