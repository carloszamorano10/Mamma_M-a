
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';


const Register = () => {


  const {setUser, setUserIsLogged, setDireccion} = useContext(GlobalContext)
  

    const [form, setForm] = useState({
        email: '',
        password: '',
        pass: '',
        direccion:''
    })

    const navegar = useNavigate();

    const handleChange = (event)=>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

   const handleSubmit = (e) =>{
     e.preventDefault()
     if (form.email === "" || form.password === "" || form.pass === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Todos los campos son obligatorios",
          });
        return;
      }
      if (form.password.length < 6) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La contraseña debe tener 6 caracteres mínimo",
          });
        return;
      }
      if (form.password !== form.pass) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ambas contraseñas deben ser iguales",
          });
        return;
      }
      Swal.fire({
        icon: "success",
        text: "Registro exitoso",
      })
      setUser({email: form.email, password: form.password});
      setUserIsLogged(true);
      setDireccion({direccion: form.direccion})
      navegar("/");
      
      ;
   }

  return (
    <>
    <div className="d-flex flex-column align-items-center py-3">
        <h1>Register</h1>
        <div>
            <div className="input-group mb-3">
                 <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                 <input type="email" 
                 className="form-control" 
                 aria-label="Sizing example input" 
                 aria-describedby="inputGroup-sizing-default" 
                 name="email" 
                 value={form.email}
                 onChange={handleChange}
                 />
            </div>
            <div className="input-group mb-3">
                 <span className="input-group-text" id="inputGroup-sizing-default">Contraseña</span>
                 <input type="password" 
                 className="form-control" 
                 aria-label="Sizing example input" 
                 aria-describedby="inputGroup-sizing-default" 
                 name="password"
                 value={form.password}
                 onChange={handleChange}
                 />
            </div>
            <div className="input-group mb-3">
                 <span className="input-group-text" id="inputGroup-sizing-default">Confirmar contraseña</span>
                 <input type="password" 
                 className="form-control" 
                 aria-label="Sizing example input" 
                 aria-describedby="inputGroup-sizing-default" 
                 name="pass"
                 value={form.pass}
                 onChange={handleChange}
                 />
            </div>
            <div className="input-group mb-3">
                 <span className="input-group-text" id="inputGroup-sizing-default">Dirección</span>
                 <input type="text" 
                 className="form-control" 
                 aria-label="Sizing example input" 
                 aria-describedby="inputGroup-sizing-default" 
                 name="direccion"
                 value={form.direccion}
                 onChange={handleChange}
                 />
            </div>
            
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">Enviar</button>
       
    </div>
    
    </>
  )
}

export default Register