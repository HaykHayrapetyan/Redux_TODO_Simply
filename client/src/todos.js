import React, {PureComponent} from 'react'

class Todos extends PureComponent{
    constructor(props){
        super(props)
        console.log(props)
        
    }

    render(){
   //     console.log(this.props.bb)
        return(
            <div>
                {this.props.babgen.map((todos) => 
                <div key={todos._id}>
                    <h4 >{todos.title}</h4>
                    <button onClick={()=>{this.props.onEdit(todos)}}>Edit</button>
                    <button onClick={()=> {this.props.onDelete(todos._id)}}>Delete</button>                       
                </div>)}
            </div>   
        )
    }
}

export default Todos;