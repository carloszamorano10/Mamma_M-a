import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';



function Navbar() {
  const { totalCart } = useContext(GlobalContext)
   const total = 25000;
   const token = false;
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary pt-0 pb-0">
  <div class="container-fluid bg-dark p-3">
    <Link class="navbar-brand text-light" to="/">Pizzería Mamma Mía</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active text-light" aria-current="page" to="/">🍕Home</Link>
        </li>

        {token ? 
       <>
       <li class="nav-item">
          <Link class="nav-link text-light" to="/profile">🪪Profile</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">🔓Log Out</a>
        </li>
       </> :
       <>
       <li class="nav-item">
          <Link class="nav-link text-light" to="/login">🔒Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/register">🔒Register</Link>
        </li>
       </>   
    }
      </ul>
      
    </div>
        <li class="nav-item d-flex justify-content-end ">
          <Link class="nav-link text-light" to="/cart">🛒Total: {totalCart}</Link>
        </li>      
  </div>
</nav>
  )
}

export default Navbar