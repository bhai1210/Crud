import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Home from './Home';

function Login() {
  return (
    <div>  
{/* <nav  class="navbar navbar-expand-lg navbar-light bg-dark">
  <a style={{color: 'white'}} class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
   
      <li  class="nav-item">
    
      <Link  style={{color: 'white'}}  class="nav-link"  to="/">Home</Link>
      </li>
      <li class="nav-item">
    
    <Link  style={{color: 'white'}}   class="nav-link" to="/createdata">Login</Link>
  </li>
  <li class="nav-item">
    
    <Link  style={{color: 'white'}}  class="nav-link" to="/Y">Logout</Link>
  </li>

    </ul>
   
  </div>
</nav> */}
<Home />
  <Outlet />
</div>
  )
}

export default Login