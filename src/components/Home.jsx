import React, { useState } from 'react'
import Header from './Header'
import Cardpizza from './Cardpizza'
import { pizzas } from '../../public/pizzas'

function Home() {
  const[ pizzalist, setPizzaslist]= useState(pizzas)
  return (
    <>
    <Header />

    <div className='contpizza'>

    {
      pizzalist.map((pizza) =>(
        <Cardpizza key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
        />
      ))
    }
    </div>
    
    </>
  )
}

export default Home