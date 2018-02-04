// Deployment info http://bit.ly/2vY88Kr

// React libraries
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

// Custom components
import Navigation from './Navigation';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';


/**
 * Main App component responsible for handling routes and redirection
 */
const App = () => 
  <BrowserRouter>
    <div className="container">
      <Navigation />
      <Header /> 
      <Container />
      <Footer />
    </div>
  </BrowserRouter>


export default App;
