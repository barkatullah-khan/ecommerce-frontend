import { useState, useEffect } from "react"; // Added useEffect
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  // 1. Initialize cart from LocalStorage if it exists, otherwise use empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shopping-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. Automatically save the cart to LocalStorage every time it changes
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cart));
  }, [cart]);

  const [searchQuery, setsearchQuery] = useState("");


  const updateQuantity = (id, delta) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
          : item
      )
    );
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.title} added to cart!`);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onAddToCart={addToCart}
              cart={cart}
              searchQuery={searchQuery}
              setsearchQuery={setsearchQuery} // Add this line!
            />
          }
        />
        <Route path="/product/:id" element={<DetailsPage onAddToCart={addToCart} cart={cart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} updateQuantity={updateQuantity} />} />
      </Routes>
    </Router>
  );
}

export default App;