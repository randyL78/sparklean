// React libraries
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

// Custom components
import Construction from './Construction';
import NotFound from './NotFound';
import Home from './Home';


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
          <Route exact path='/commercial'  component={Construction} />
          <Route exact path='/residential'  component={Construction} />
          <Route exact path='/specialty'  component={Construction} />
          <Route exact path='/estimates'  component={Construction} />
          <Route component={NotFound} />
        </Switch>
      </main>
    )
  }
}

export default Container;