// React libraries
import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const Links = props =>
  <ul className={props.showMenu ? "nav show": "nav hide"}  >
    <li className="nav__item"><NavLink exact to='/' >Home</NavLink></li>
    <li className="nav__item"><NavLink to='/commercial' >Commercial</NavLink></li>
    <li className="nav__item"><NavLink to='/residential' >Residential</NavLink></li>
    <li className="nav__item"><NavLink to='/specialty' >Specialty</NavLink></li>
    <li className="nav__item"><NavLink to='/estimates' >Estimates</NavLink></li>
  </ul>

Links.propTypes = {
  showMenu:  PropTypes.bool.isRequired
}


export default Links;