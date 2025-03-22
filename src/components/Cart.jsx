import React, { useState } from 'react'
import { pizzaCart } from '../../public/pizzas'

const Cart = () => {
  const[ pizzacartlist, setPizzascart]= useState(pizzaCart)
  const[counter, setCounter]= useState(0)
  const aumentar = ()=>{
    setCounter(counter + 1)
  }

  const restar = () =>{
    setCounter(counter -1)
  }
  return (
    <>
    <p>Detalles del pedido:</p>
    {
        pizzacartlist.map((cart)=>(
            <div>
                <img src={cart.img} alt="imagen de la pizza seleccionada" />
                <h2>{cart.name}</h2>
                <p>{cart.price}</p>
                <button onClick={aumentar}>+</button>
                <h3>{counter}</h3>
                <button onClick={restar}>-</button>
            </div>
        ))
    }
    </>
  )
}

export default Cart