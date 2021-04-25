import React, { Component } from 'react';
import Nav from './Nav';
import '../assets/Header.css'

class Header extends Component {
    render() {
        return (
            <div className='header-bar'>
                <div className="logo">LOGO</div>
                <div className="nav-bar">
                <Nav/>
                </div>
            </div>
        );
    }
}

export default Header;