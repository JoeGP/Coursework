import React from 'react'
import ReactDOM from 'react-dom'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Body from '../components/Body'

 
function App(){
   
    const Course = 
        (<div className='layout'>
            <Menu />
            <Header />
            <Body />
            
        </div>);

    ReactDOM.render(
        Course ,
        document.getElementById('app')
    );
}

App()
//setInterval(App,1000)