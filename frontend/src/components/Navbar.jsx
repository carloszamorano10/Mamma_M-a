import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';



function Navbar() {
  const { totalCart, userIsLogged } = useContext(GlobalContext)

   const validaRoot = ({ isActive }) => isActive? "text-decoration-none text-warning" : "text-decoration-none text-light"
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary pt-0 pb-0">
  <div class="container-fluid bg-dark p-3">
    <NavLink className="text-decoration-none text-light fs-4 me-3" to="/">Pizzería Mamma Mía</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={validaRoot} text-light aria-current="page" to="/">🍕Home</NavLink>
        </li>

        {userIsLogged ? 
       <>
       <li class="nav-item">
          <NavLink className={validaRoot} text-light to="/profile">🪪Profile</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className={validaRoot} text-light href="#">🔓Log Out</NavLink>
        </li>
       </> :
       <>
       <li class="nav-item">
          <NavLink className={validaRoot} text-light to="/login">🔒Login</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className={validaRoot} text-light to="/register">🔒Register</NavLink>
        </li>
       </>   
    }
      </ul>
      
    </div>
        <li class="nav-item d-flex justify-content-end ">
          <NavLink className={validaRoot} to="/cart">🛒Total: {totalCart}</NavLink>
        </li>      
  </div>
</nav>
  )
}

export default Navbar