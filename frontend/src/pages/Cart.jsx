import React, { useState } from 'react';
import { pizzaCart } from '../../public/pizzas';

const Cart = () => {
  const [pizzacartlist, setPizzascart] = useState(pizzaCart);

  const eliminarPizza = (id) => {
    setPizzascart((prev) => prev.filter((pizza) => pizza.id !== id));
  };

  const aumentar = (id) => {
    setPizzascart((prev) =>
      prev.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: (pizza.quantity || 0) + 1 } : pizza
      )
    );
  };


  const restar = (id) => {
    setPizzascart((prev) =>
      prev.map((pizza) =>
        pizza.id === id
          ? { ...pizza, quantity: Math.max((pizza.quantity || 0) - 1, 0) }
          : pizza
      )
    );
    if (pizzacartlist.find((pizza) => pizza.id === id).quantity === 0) {
        eliminarPizza(id);
      }
  };

  const total = pizzacartlist.reduce(
    (acc, pizza) => acc + pizza.price * (pizza.quantity || 0),
    0
  );  

  return (
    <div className='d-flex flex-column align-items-center'>
      <h1>Detalles del pedido:</h1>
      {pizzacartlist.map((cart) => (
        <div key={cart.id} className='d-flex m-5 align-items-center'>
          <img
            src={cart.img}
            alt="imagen de la pizza seleccionada"
            className='img-fluid'
            style={{ width: '150px' }}
          />
          <h2 className='m-2'>{cart.name}</h2>
          <p className='m-2 fs-3'>${cart.price}</p>
          <button
            className='btn btn-outline-info m-2'
            onClick={() => aumentar(cart.id)}
            style={{ height: '30px' }}
          >
            +
          </button>
          <h3 className='m-2'>{cart.quantity || 0}</h3>
          <button
            className='btn btn-outline-danger m-2'
            onClick={() => restar(cart.id)}
            style={{ height: '30px' }}
          >
            -
          </button>
        </div>
      ))}
      <p className='fs-3'>Total:${total}</p>
      <button className='btn btn-dark m-4'>Pagar</button>
    </div>
  );
};

export default Cart;