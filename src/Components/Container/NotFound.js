// React libraries
import React from 'react';
import {Link} from 'react-router-dom';

/**
 * Displays a 404 error page for unfound routes
 */
const NotFound = () => 
  <div> 
    <h2>We're sorry, the page you are looking for is not available</h2>
    <Link to='/' >Head back to safety...</Link>
  </div>


export default NotFound;