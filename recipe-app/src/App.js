import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';




function App() {
  return (
    <Router>

    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/recipes" component={Recipes}/>
    </Switch>

    </Router>
  );
}

export default App;
