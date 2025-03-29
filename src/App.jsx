import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ProNavbar from './components/Nav'
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import AllCatPro from "./pages/AllProducts/AllCatPro";
import Footer from "./components/Footer";
import Products from "./pages/products/Products";
import './index.css'
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import SignUpPage from "./pages/sign/Sign";
import Contact from "./pages/contact/Contact";


function App() {
  return (
      <Router>
        <ProNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<AllCatPro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
