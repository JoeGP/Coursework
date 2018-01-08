import React from 'react'
import ReactDOM from 'react-dom'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Body from '../components/Body'


function App(){
    const time = new Date().toLocaleTimeString();
    const footer =  <div>
                   Master's Project by Joseph Lamptey, Higher School of Economics
                   <p>{time}</p>
                 </div>

    const Course = 
        (<div className='container'>
            <Menu />
            <Header />
            {footer}
        </div>);

    ReactDOM.render(
        Course ,
        document.getElementById('app')
    );
}

setInterval(App,1000)