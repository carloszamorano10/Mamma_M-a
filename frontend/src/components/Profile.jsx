import React from 'react';

export const Profile = () => {
  return (
    <div className='d-flex justify-content-center'>
    <div className="card" style={{ width: "25rem" }}>
      <img src="https://static.vecteezy.com/system/resources/previews/002/205/989/non_2x/user-profile-icon-free-vector.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">Carlos Zamorano</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Email: Godzylla@gmail.com</li>
        <li className="list-group-item">Direccion: José Miguel Carrera 321, Dpto #508</li>
      </ul>
      <div className="card-body">
      <div class="d-grid gap-2">
           <button class="btn btn-primary" type="button">Cerrar Sesión</button>
       </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;