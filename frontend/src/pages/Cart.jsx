import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { carrito, setCarrito } = useContext(GlobalContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const modificarCantidad = (id, cambio) => {
    setCarrito(prev => 
      prev.map(pizza => {
        if (pizza.id !== id) return pizza;
        
        const nuevaCantidad = (pizza.quantity || 1) + cambio;
        
        if (nuevaCantidad < 1) return null;
        
        return { ...pizza, quantity: nuevaCantidad };
      }).filter(Boolean)
    );
  };

  const handleCheckout = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate('/');
  };

  const totalItems = carrito.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const subtotal = carrito.reduce(
    (acc, pizza) => acc + pizza.price * (pizza.quantity || 1),
    0
  );
 
  const total = subtotal;


  if (carrito.length === 0) {
    return (
      <div className="container text-center py-5">
        <div className="empty-cart-icon mb-4">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <h2 className="mb-3">Tu carrito está vacío</h2>
        <p className="text-muted mb-4">Agrega algunas pizzas del menú</p>
        <button 
          className="btn btn-primary"
          onClick={() => navigate('/')}
        >
          Ver Menú
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Tu Pedido</h1>
      
      <div className="row">
        <div className="col-lg-8">
          {carrito.map((pizza) => (
            <div key={pizza.id} className="card mb-3 border-0 shadow-sm">
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    className="img-fluid rounded-start"
                    style={{ height: '140px', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body d-flex flex-column h-100 py-2">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h2 className="h5 card-title mb-1">{pizza.name}</h2>
                        <p className="text-muted small mb-2">
                          {pizza.ingredients.slice(0, 3).join(', ')}
                          {pizza.ingredients.length > 3 && '...'}
                        </p>
                      </div>
                      <button 
                        onClick={() => modificarCantidad(pizza.id, -pizza.quantity)}
                        className="btn btn-sm btn-outline-danger border-0"
                        aria-label={`Eliminar ${pizza.name} del carrito`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                    
                    <div className="mt-auto d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary btn-sm rounded-circle"
                          onClick={() => modificarCantidad(pizza.id, -1)}
                          disabled={(pizza.quantity || 1) <= 1}
                          style={{ width: '30px', height: '30px' }}
                          aria-label="Reducir cantidad"
                        >
                          -
                        </button>
                        <span className="mx-3 fs-5">{pizza.quantity || 1}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm rounded-circle"
                          onClick={() => modificarCantidad(pizza.id, 1)}
                          style={{ width: '30px', height: '30px' }}
                          aria-label="Aumentar cantidad"
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="text-end">
                        <div className="text-muted small">
                          ${pizza.price} c/u
                        </div>
                        <strong className="fs-5">
                          ${(pizza.price * (pizza.quantity || 1))}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="col-lg-4">
          <div className="card border-0 shadow sticky-top" style={{ top: '20px' }}>
            <div className="card-body">
              <h3 className="card-title mb-3">Resumen del Pedido</h3>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal ({totalItems} items)</span>
                <span>${subtotal}</span>
              </div>
              
              
              
              <hr className="my-2" />
              
              <div className="d-flex justify-content-between fw-bold fs-5 my-3">
                <span>Total</span>
                <span>${total}</span>
              </div>
              
              <button 
                className="btn btn-primary w-100 py-3 fw-bold"
                onClick={handleCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                    Procesando...
                  </>
                ) : (
                  'Pagar Ahora'
                )}
              </button>
              
              <button 
                className="btn btn-outline-primary w-100 mt-2"
                onClick={() => navigate('/')}
              >
                Seguir Comprando
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;