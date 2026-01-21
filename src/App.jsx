import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/DetailsPage"; // You must import this

function App() {
  // This state will hold all items added to the cart
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    // We use a spread operator to keep old items and add the new one
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  return (
    <Router>
      <Routes>
        {/* The Home Page needs the addToCart function */}
        <Route path="/" element={<HomePage onAddToCart={addToCart} cart={cart}/>} />
        
        {/* The Details Page needs the addToCart function too */}
        <Route path="/product/:id" element={<DetailsPage onAddToCart={addToCart} cart={cart} />} />
        
        {/* The Cart Page needs the actual list (cart) and the ability to update it (setCart) */}
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;