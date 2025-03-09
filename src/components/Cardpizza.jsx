import React from 'react'

function Cardpizza({name,price,ingredients,img}) {
  return (
 
  <div className='pizacard'>
   <img src={img} alt="pizza" />
   <h1>{name}</h1>
   <h3>Ingredientes:</h3>
   <p className='m-1 text-center'>🍕{ingredients.join(', ')}</p>
   <p>Precio: ${price}</p>
   <div>
  <button className='btn btn-ligth btn-outline-secondary btn-sm m-1'>Ver Mas</button>
  <button className='btn btn-dark text-white btn-outline-secondary btn-sm m-1'>Añadir</button>
   </div>
  </div>



  )
}

export default Cardpizza