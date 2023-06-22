import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

// import Contact from "./pages/Contact";
import Cards from "./components/Cards";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Room from "./pages/Room";
// import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog/Catalog";


const App = () => {  
  return (   
      <Routes>

        <Route path="/" element={<Layout/>}> 

            <Route path="" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            {/* <Route path="/contact" element={<Contact/>}/> */}
            <Route path="/Cards" element={<Cards/>}/>
            <Route path="/product/:id" element={<Product/>}/>            
            {/* <Route path="*" element={<NotFound/>}/>    */}
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/room" element={<Room/>}/>

        </Route> 
            
           

        <Route path="/register" element={<Register/>}/> 
        <Route path="/login" element={<Login/>}/> 

      </Routes>  
  )
}

export default App;

