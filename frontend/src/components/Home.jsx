import React, { useEffect, useState } from 'react'
import Header from './Header'
import Cardpizza from './Cardpizza'


function Home() {
  const[ pizzalist, setPizzaslist]= useState([])

  const getPizzas = async () => {
     const response = await fetch("http://localhost:5000/api/pizzas")
     const data = await response.json()
     console.log(data)
     setPizzaslist(data)
  }
   
   useEffect(()=>{
    getPizzas()
   },[])

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