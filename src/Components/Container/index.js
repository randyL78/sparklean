// React libraries
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

// Custom components
import Home from './Home';
import NotFound from './NotFound';


/**
 * Main container component
 * Handles App state and chooses which sub page to display
 */
class Container extends Component {
  render (props) {
    return (
      <main className = "main">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/commercial'  component={Home} />
          <Route exact path='/residential'  component={Home} />
          <Route exact path='/specialty'  component={Home} />
          <Route exact path='/estimates'  component={Home} />
          <Route component={NotFound} />
        </Switch>
      </main>
    )
  }
}

export default Container;