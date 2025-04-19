import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const navegar = useNavigate();
  const {user, direccion, setDireccion, setUser} = useContext(GlobalContext)

  const logout = ()=>{
    Swal.fire({
            icon: "success",
            text: "Logout existoso, nos vemos!",
          });
    setDireccion({});
    setUser("");
    setUserIsLogged(false);
    navegar("/login");
  };

  return (
    <div className='d-flex justify-content-center'>
    <div className="card" style={{ width: "25rem" }}>
      <img src="https://static.vecteezy.com/system/resources/previews/002/205/989/non_2x/user-profile-icon-free-vector.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">Carlos Zamorano</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Direccion: {direccion.direccion}</li>
      </ul>
      <div className="card-body">
      <div class="d-grid gap-2">
           <button class="btn btn-primary" type="button" onClick={logout}>Cerrar Sesión</button>
       </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;