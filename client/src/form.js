import React, { PureComponent } from 'react';
import PropTypes  from 'prop-types';
import Submit from './submit'
import Todos from './todos'


class Form extends PureComponent{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };
    constructor(props){
        super(props);
        this.state = {
            title: props.input,
        }
    }

    componentDidUpdate() {
        this.setState({title: this.props.input})
    }

    handleSubmit = () => {
        this.props.onSubmit({
            title: this.state.title,
        })
        this.setState({
            title: ''       
        })    
    }

    handleCHangetitle = (e) => {       
        const title = e.target.value;
        this.props.onInputChange(title, this.props.mode)
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.title} onChange={this.handleCHangetitle}/>
                
                <Submit mode = {this.props.mode} onSub={ this.handleSubmit } onEdit={()=>{this.props.onPut()}} />
            </div>
        )
    }
}

export default Form;