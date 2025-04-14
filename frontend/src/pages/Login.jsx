import { useState } from "react"
import React from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [form, setForm] = useState({
        email: '',
        password: '',
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
     if (form.email === "" || form.password === "") {
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
      Swal.fire({
        icon: "success",
        text: "Registro exitoso",
      })
      navegar("/")
      ;
   }

  return (
    <>
    <div class="d-flex flex-column align-items-center py-3">
        <h1>Login</h1>
        <div>
            <div class="input-group mb-3">
                 <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                 <input type="email" 
                 class="form-control" 
                 aria-label="Sizing example input" 
                 aria-describedby="inputGroup-sizing-default" 
                 name="email" 
                 value={form.email}
                 onChange={handleChange}
                 />
            </div>
            <div class="input-group mb-3">
                 <span class="input-group-text" id="inputGroup-sizing-default">Contraseña</span>
                 <input type="password" 
                 class="form-control" 
                 aria-label="Sizing example input" 
                 aria-describedby="inputGroup-sizing-default" 
                 name="password"
                 value={form.password}
                 onChange={handleChange}
                 />
            </div>
       
            
        </div>
        <button onClick={handleSubmit} class="btn btn-primary">Enviar</button>

    </div>
    
    </>
  )
}

export default Login