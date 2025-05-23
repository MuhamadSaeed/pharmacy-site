import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartProvider from "../src/contexts/CartContext.jsx";
// import { UserProvider } from "../src/contexts/UserContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CartProvider>
    {/* <UserProvider> */}
    <App />
    {/* </UserProvider> */}
  </CartProvider>
  </StrictMode>,
)
