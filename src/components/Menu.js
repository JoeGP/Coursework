import React, {Component} from 'react'

export default class Menu extends Component{
    render(){
        return(
            <div className='menu'>
                <div className='btn btn-default'>
                    Home
                </div>
                <div className='btn btn-default'>
                    Resources
                </div>
                <div className='btn btn-default'>
                    Phases
                </div>
                <div className='input-group  mb-3'>
                    <div className='input-group-prepend'>
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input className='form-control' placeholder='Search'/>
                    </div>
                </div>
                <div className='btn btn-default'>
                    Sign Up
                </div>
            </div>
        )
    }
}

