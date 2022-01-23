import React from 'react';
import '../App.css'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import About from './About'
import Work from './Work';
import Contact from './Contact';

const Navbar = () => {
  return (
    <div>
        <Router>
            <Link to="/aboutme">About</Link>
            <Link to="work">Work</Link>
            <Link to="contact">Contact</Link>
        </Router>
    </div>
  );
};

export default Navbar;


// About Work Contact Github
