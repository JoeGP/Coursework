import React,{Component} from 'react'
import Button from './Button'

class Header extends Component{
    render(){
        return(
            <div className='header'>
                <div className='container header-text'>
                    <h2>Robotic Transaction on A Blockchain</h2>
                    <p>Consider a cargo train that needs to pay for the rail levies
                         to be granted access to cross from one city to the other.
                         One can assume city A to be Moscow and city B to be Saint Petersburg.
                         These autonomous trains can utilize Ethereum for instance to pay the rail levies charged
                    </p>
                    <p>Here are three autonomous factories X, Y and Z. X is a 3D factory. 
                        Y is a computer manufacturing factory and Z is Lithium manufacturing factory. 
                        These factories are inter dependant and also rely on the rail system to transport 
                        their products as well as raw materials. You can further assume that there are shopping malls,located all ove ther cities,
                         that they suppply
                    </p>
                    <Button name='More...' className='btn btn-default'/>
                </div>  
                <div> Executive Summary of the project for each phase</div>              
            </div>
        )
    }
}

export default Header