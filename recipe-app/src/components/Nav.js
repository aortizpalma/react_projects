
import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Recipes from '../pages/Recipes';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/recipes">Recipes</Link>
                        </li>
                    </ul>
                </nav>
                
            </div>
        );
    }
}

export default Nav;

