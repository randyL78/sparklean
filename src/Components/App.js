// Deployment info http://bit.ly/2vY88Kr

// React libraries
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

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
      <Container />
    </div>
  </BrowserRouter>


export default App;
