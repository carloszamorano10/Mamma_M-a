import { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([]);
    const [pizzalist, setPizzaslist] = useState([]);
    const [user, setUser] = useState("");
    const [userIsLogged, setUserIsLogged] = useState(() => {
      return Boolean(localStorage.getItem('token'));
    });
    const [direccion, setDireccion] = useState({});

     const getPizzas = async () => {
       const response = await fetch("http://localhost:5000/api/pizzas");
       const data = await response.json();
       console.log(data);
       setPizzaslist(data);
     };
  

     const subtotal = carrito.reduce(
       (acc, pizza) => acc + pizza.price * (pizza.quantity || 1),
       0
     );
    
     const totalCart = subtotal;

     const navegar = useNavigate()

     const handleLogin = async (email, password) => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({email, password}),
        });
  
        const data = await response.json();
        
        if (data?.error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${data.error}`,
          });
          return false;
        }
        
        Swal.fire({
          icon: "success",
          text: "Registro exitoso",
        });
  
        localStorage.setItem("token", data.token);
        setUserIsLogged(true);
        navegar("/");
        return true;
        
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrió un error al intentar iniciar sesión",
        });
        return false;
      }
    };


    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return null;
      }
  
      try {
        const response = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error('Error al obtener datos del usuario');
        }
  
        const userData = await response.json();
        setUser(userData);
        setUserIsLogged(true);
        return userData;
      } catch (error) {
        console.error("Error fetching user data:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo cargar la información del usuario",
        });
        handleLogout2();
        return null;
      }
    };
  
 
    const handleLogout2 = () => {
      Swal.fire({
        icon: "success",
        text: "Logout exitoso, ¡nos vemos!",
      });
      localStorage.removeItem("token");
      setDireccion({});
      setUser(null);
      setUserIsLogged(false);
    };
  

  

    return(
        <GlobalContext.Provider value={{pizzalist, getPizzas, carrito, setCarrito, totalCart, user, setUser, userIsLogged, setUserIsLogged, direccion, setDireccion, handleLogin, fetchUserData, handleLogout2}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider