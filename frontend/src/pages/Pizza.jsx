import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const Pizza = () => {
  const {id} = useParams()

  console.log(id)

    const[ pizzalist, setPizzaslist]= useState([])
    
      const getPizzas = async () => {
         const response = await fetch(`http://localhost:5000/api/pizzas/${id}`)
         const data = await response.json()
         console.log(data)
         setPizzaslist(data)
      }
       
       useEffect(()=>{
        getPizzas()
       },[])


  return (
    <>
    <div className='d-flex justify-content-center m-5'>
      <div className="card" style={{width: "18rem"}}>
        <img src={pizzalist.img} className="card-img-top" alt="imagen de pizza seleccionada"/>
        <div className="card-body">
          <h5 className="card-title">Pizza {pizzalist.name}</h5>
          <h5 className="card-title">${pizzalist.price}</h5>
          <p className="card-text">{pizzalist.desc}</p>
          <a href="#" className="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Pizza