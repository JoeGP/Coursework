import React,{Component} from 'react'
import Button from './Button'

class Body extends Component{
    render(){
        return(
            <div className='col-md-12'>
                <h3 className=''>Sign In Here</h3>
                <div className='col-md-12 row'>
                    <form className='form-control col-md-4'>
                        <label> Email</label>
                        <input className='form-control'/>
                        <label> Password</label>
                        <input  className='form-control'/>                        
                        <Button name='Register'/>
                    </form>
                    <ul className='list-group col-md-8'>
                        <li className='list-group-item'>Phase 1: Build a Blockchain for the robots</li>
                        <li className='list-group-item'>Phase 2: Assemble the autonomous robots</li>
                        <li className='list-group-item'>Phase 3: Embbed blockchain to their functionality to the autonomous robots</li>
                        <li className='list-group-item'>Phase 4: Consider the cases: road pass or levies, and 3D printing orders</li>
                    </ul>
                    <div>Footer  maybe</div>
                </div>
            </div>
        )
    }
}

export default Body