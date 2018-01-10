import React, {Component} from 'react'

class Button extends Component{
    constructor(props){
        super(props)
        this.rename =  this.rename.bind(this);

        this.state = {
            name: 'More...'
        }
    }

    rename(e){
        e.preventDefault();

        switch(this.state.name){
            case 'More...':
                this.setState({name: 'Hurray!'});
                break;
            case 'Hurray!':
                this.setState({name: 'Congrats!'});
                break;
            default:
                this.setState({name: 'More...'});
                break;
        }        
    }
    render(){
        return(
            <div className='btn btn-primary' onClick={this.rename}>
                {this.state.name}
            </div>
        )
    }
}

export default Button