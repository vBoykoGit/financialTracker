import React from 'react';
import '../css/header.css';
import { NavLink } from 'react-router-dom'

const selectedStyle = {
    backgroundColor: "white",
    color: "black"
}

const Header = (props) =>
    <header className='header'>
        <nav className='headerContent'>
            <div className='headerPlanner'>Planner</div>
            <NavLink exact to='/' className='headerNav' activeStyle={selectedStyle}>Main</NavLink>
            <NavLink to='/amount' className='headerNav' activeStyle={selectedStyle}>Configure</NavLink>
        </nav>
    </header >


export default Header