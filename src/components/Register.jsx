import { useState } from "react"
import Swal from 'sweetalert2'

const Register = () => {

    const [form, setForm] = useState({
        email: '',
        password: '',
        pass: ''
    })

    const [error, setError] = useState ('');

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
      setError("");
      Swal.fire({
        icon: "success",
        text: "Registro exitoso",
      });
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
            <div class="input-group mb-3">
                 <span class="input-group-text" id="inputGroup-sizing-default">Confirmar contraseña</span>
                 <input type="password" 
                 class="form-control" 
                 aria-label="Sizing example input" 
                 aria-describedby="inputGroup-sizing-default" 
                 name="pass"
                 value={form.pass}
                 onChange={handleChange}
                 />
            </div>
            
        </div>
        <button onClick={handleSubmit} class="btn btn-primary">Enviar</button>
        {
            error && <p>{error}</p>
        }
    </div>
    
    </>
  )
}

export default Register