import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, setCart }) => {
  
  // 1. Calculate subtotal based on REAL cart data
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  // 2. Function to remove item
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Optimized CartItem for 400px+ screens
  const CartItem = ({ item }) => (
    <div className="flex items-center justify-between border-b py-4 last:border-b-0 w-full gap-2">
      
      {/* LEFT: Image and Title Info */}
      <div className="flex items-center flex-1 min-w-0">
        <img 
          src={item.img} 
          alt={item.title} 
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded border bg-gray-50 mr-3 shrink-0" 
        />
        <div className="flex flex-col min-w-0">
          <span className="font-semibold text-secondary text-sm sm:text-base truncate">
            {item.title}
      </span>
        <button 
          onClick={() => removeFromCart(item.id)}
            className="text-[11px] sm:text-xs text-left text-red-500 hover:text-red-700 mt-1 font-medium"
        >
          Remove
        </button>
      </div>
    </div>

      {/* RIGHT: Price and Quantity */}
      <div className="flex flex-col items-end shrink-0 ml-2">
        <span className="text-sm sm:text-lg font-bold text-primary">
          ${item.price.toFixed(2)}
        </span>
        <span className="text-[10px] sm:text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded border mt-1">
          Qty: 1
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Passing cart to Header so the badge works */}
      <Header cart={cart} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-secondary mb-6">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg shadow border border-gray-200">
            <img src="/empty-cart.png" alt="Empty" className="w-32 mx-auto mb-4 opacity-20" />
            <h2 className="text-xl mb-4 text-gray-500">Your cart is empty</h2>
            <Link to="/" className="text-blue-600 font-bold hover:underline">
              ← Go Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* ITEM SECTION */}
            <section className="lg:w-2/3 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="hidden sm:grid grid-cols-2 pb-4 border-b text-gray-400 text-sm">
                <span>Product</span>
                <span className="text-right">Price</span>
              </div>
              
              {cart.map((item, index) => (
                <CartItem key={`${item.id}-${index}`} item={item} />
              ))}
            
              <div className="mt-6 flex justify-between items-center">
                <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  ← Continue Shopping
                </Link>
                <button 
                  onClick={() => setCart([])} 
                  className="text-gray-400 hover:text-red-500 text-sm"
                >
                  Clear Cart
                </button>
              </div>
            </section>

            {/* SUMMARY SECTION */}
            <aside className="lg:w-1/3 h-fit sticky top-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold border-b pb-3 mb-4 text-secondary">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                    <span className="font-semibold text-secondary">${subtotal.toFixed(2)}</span>
                </div>
                  <div className="flex justify-between text-gray-600">
                  <span>Shipping:</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600 border-b pb-3">
                    <span>Tax (GST):</span>
                    <span className="font-semibold text-secondary">$0.00</span>
                </div>
                <div className="flex justify-between pt-3 text-xl font-bold text-secondary">
                  <span>Order Total:</span>
                    <span className="text-blue-700">${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg mt-6 hover:bg-blue-700 transition-all active:scale-95 shadow-md">
                  Checkout
                </button>
                
                <div className="mt-4 flex justify-center gap-2">
                  <img src="/visa.png" alt="visa" className="h-6 opacity-70" />
                  <img src="/mastercard.png" alt="master" className="h-6 opacity-70" />
                  <img src="/paypal.png" alt="paypal" className="h-6 opacity-70" />
                </div>
              </div>
            </aside>

          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;