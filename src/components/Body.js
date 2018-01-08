import React,{Component} from 'react'

class Body extends Component{
    render(){
        return(
            <div className='main'>
                <h3>Sign In Here</h3>
                <form className='form'>
                    <label> Email</label>
                    <input />
                    <label> Password</label>
                    <input  />
                    <button type='submit'>Sign In</button>
                </form>
            </div>
        )
    }
}

export default Body