import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ky from "ky";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

// import Contact from "./pages/Contact";
// import Catalog from "./pages/Catalog";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Room from "./pages/Room";
// import NotFound from "./pages/NotFound";

import api from "./config/api";


const App = () => {
  useEffect(() => {
    api("users").json()
    .then(res => console.log(res))
  }, [])
  
  
  return ( 
    <>
       
      

      <Routes>

        <Route path="/" element={<Layout/>}> 

            <Route path="" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            {/* <Route path="/contact" element={<Contact/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/room" element={<Room/>}/> 
            <Route path="*" element={<NotFound/>}/>   */}

        </Route> 

      </Routes>      
    </> 
  )
}

export default App;

