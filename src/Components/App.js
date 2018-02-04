// Deployment info http://bit.ly/2vY88Kr

// React libraries
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Custom components
import Navigation from './Navigation';
import Header from './Header';
import Container from './Container';


/**
 * Main App component responsible for handling routes and redirection
 */
const App = () => 
  <BrowserRouter>
    <div className="container">
      <Navigation />
      <Header /> 
      <Switch>
        <Route exact path='/' render={ () => <Container /> } />
        <Route exact path='/commercial' render={ () => <h1>Commercial Cleaning</h1> } />
        <Route exact path='/residential' render={ () => <h1>Home Cleaning</h1> } />
        <Route exact path='/specialty' render={ () => <h1>Specialty Cleaning</h1> } />
        <Route exact path='/about' render={ () => <h1>About</h1> } />
      </Switch>
    </div>
  </BrowserRouter>


export default App;
