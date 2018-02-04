// React libraries
import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 *  Renders navigation links
 */
const Navigation = () => 
  <nav className="navbar">
    <ul className="nav">
      <li className="nav__item"><NavLink exact to='/' >Home</NavLink></li>
      <li className="nav__item"><NavLink to='/commercial' >Commercial</NavLink></li>
      <li className="nav__item"><NavLink to='/residential' >Residential</NavLink></li>
      <li className="nav__item"><NavLink to='/specialty' >Specialty</NavLink></li>
      <li className="nav__item"><NavLink to='/estimates' >Estimates</NavLink></li>
    </ul>
  </nav>

export default Navigation;