import { createContext,useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([]);
    const [pizzalist, setPizzaslist] = useState([]);
   
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
  

    return(
        <GlobalContext.Provider value={{pizzalist, getPizzas, carrito, setCarrito, totalCart}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider