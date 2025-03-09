import React from 'react'



function Navbar() {
   const total = 25000;
   const token = false;
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary pt-0 pb-0">
  <div class="container-fluid bg-dark p-3">
    <a class="navbar-brand text-light" href="#">Pizzería Mamma Mía</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">🍕Home</a>
        </li>

        {token ? 
       <>
       <li class="nav-item">
          <a class="nav-link text-light" href="#">🪪Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">🔓Log Out</a>
        </li>
       </> :
       <>
       <li class="nav-item">
          <a class="nav-link text-light" href="#">🔒Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">🔒Register</a>
        </li>
       </>   
    }
      </ul>
      
    </div>
        <li class="nav-item d-flex justify-content-end ">
          <a class="nav-link text-light" href="#">🛒Total: {total}</a>
        </li>      
  </div>
</nav>
  )
}

export default Navbar