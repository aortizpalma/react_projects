import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
    render() {
        return (
            <div>
                <Nav/>
                Header text.
            </div>
        );
    }
}

export default Header;