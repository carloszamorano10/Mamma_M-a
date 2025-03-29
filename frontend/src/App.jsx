import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Pizza from "./components/Pizza";


function App() {
  
  return (
    <>
      <Navbar />
      {/*<Home />*/}
      {/*<Register />*/}
      {/*<Login />*/}
       {/*<Cart />*/}
       <Pizza />
      <Footer />
    </>
  );
}

export default App;
