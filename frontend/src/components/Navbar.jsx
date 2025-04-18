import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';



function Navbar() {
  const { totalCart } = useContext(GlobalContext)
   const total = 25000;
   const token = false;
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary pt-0 pb-0">
  <div class="container-fluid bg-dark p-3">
    <NavLink class="navbar-brand text-light" to="/">Pizzería Mamma Mía</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink className={({ isActive })=> (isActive ? "text-primary-emphasis" : "text-secondary")} text-light aria-current="page" to="/">🍕Home</NavLink>
        </li>

        {token ? 
       <>
       <li class="nav-item">
          <NavLink className={({ isActive })=> (isActive ? "text-primary-emphasis" : "text-secondary")} text-light to="/profile">🪪Profile</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className={({ isActive })=> (isActive ? "text-primary-emphasis" : "text-secondary")} text-light href="#">🔓Log Out</NavLink>
        </li>
       </> :
       <>
       <li class="nav-item">
          <NavLink className={({ isActive })=> (isActive ? "text-primary-emphasis" : "text-secondary")} text-light to="/login">🔒Login</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className={({ isActive })=> (isActive ? "text-primary-emphasis" : "text-secondary")} text-light to="/register">🔒Register</NavLink>
        </li>
       </>   
    }
      </ul>
      
    </div>
        <li class="nav-item d-flex justify-content-end ">
          <NavLink class="nav-link text-light" to="/cart">🛒Total: {totalCart}</NavLink>
        </li>      
  </div>
</nav>
  )
}

export default Navbar