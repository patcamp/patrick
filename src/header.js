import React from 'react';
import './header.css'

function Header() {
    return (
        <div className='container'>
            <h1 className='header'>Patrick Campfield</h1>
            <Menu />
        </div>
    )
}

function Menu(){
    return (
        <div className='menu'>
            <button className='menuBtn'>Home</button>
            <button className='menuBtn'>DEI Resume</button>
        </div>
    )
}

export default Header;