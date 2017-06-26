import React, {PureComponent} from 'react'
import PropTypes  from 'prop-types';


class subButton extends PureComponent{
    static propTypes = {
        onSub: PropTypes.func.isRequired
    };
    constructor(props){
        super(props)
        this.subEd = props.subEd;
    }
    
    render(){
        if(this.props.mode == 'edit'){
            console.log('edit')
            return(
                <button onClick={()=>{this.props.onEdit()}}>{this.props.mode}</button>        
            )
        }else{
             return(
                <button onClick={() => {this.props.onSub()}}>{this.props.mode}</button>        
            )
        }
        
    }
}

export default subButton;