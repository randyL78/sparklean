// React libraries
import React, {Component} from 'react';

// Custom Components
import Links from './Links';


/**
 *  Renders navigation links
 *  Handles local navigation state for mobile dropdown
 */
class Navigation extends Component {
  // Build initial state of the component
  constructor() {
    // Changes scope of "this" from Component base class to Navigation class
    super();
    this.state={
      isMenuDropped: false
    }
  }

  handleButtonClick = () => {
    if (this.state.isMenuDropped) {

      this.setState({
        isMenuDropped: false
      })
    } else {
 
      this.setState({
        isMenuDropped: true
      })
    }
  }




  render () {
    return (
      <nav className="navbar">
        <button className={this.state.isMenuDropped ? "nav__menu active" : "nav__menu" } onClick={this.handleButtonClick} >Menu</button>
        <Links  showMenu={this.state.isMenuDropped}   />
      </nav>
   )
  }
}

export default Navigation;