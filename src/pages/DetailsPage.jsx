// src/pages/DetailsPage.jsx
import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { allProducts } from '../Data/products';

const DetailsPage = ({ onAddToCart }) => {
  const { id } = useParams();

  // This line finds the correct object from your list of 31 items
  const product = allProducts.find((item) => item.id === Number(id));

  // Safety check if the product doesn't exist
  if (!product) {
    return <div className='text-center p-20'>Product not found!</div>;
  }

  return (
    <div className="min-h-screen bg-background-light">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Main Product Layout */}
        <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg">
          
          {/* 1. Image Gallery (Now using product.img) */}
          <section className="lg:w-1/2">
            <div className="bg-white border h-96 flex items-center justify-center rounded-lg mb-4 p-4">
              {/* --- DYNAMIC IMAGE HERE --- */}
              <img src={product.img} alt={product.title} className="max-h-full object-contain" />
            </div>
            
            <div className="flex space-x-2 overflow-x-auto">
              {/* Thumbnails (Can be dynamic later, for now we show the same image) */}
              <div className="w-20 h-20 border-2 border-orange-500 cursor-pointer p-1 rounded">
                <img src={product.img} className="w-full h-full object-contain" />
              </div>
            </div>
          </section>

          {/* 2. Product Information (Now using product.title and product.price) */}
          <section className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-secondary mb-2">
              {product.title} {/* --- DYNAMIC TITLE --- */}
            </h3>
            
            <div className="text-sm text-gray-500 mb-4 border-b pb-4">
              ★★★★★ (45 Reviews) | Category: {product.category}
            </div>

            <div className="mb-6">
              <span className="text-2xl font-extrabold text-primary">${product.price}</span>
              <span className="text-base text-gray-400 line-through ml-3">
                ${(Number(product.price) + 20).toFixed(2)}
              </span>
            </div>
            
            <div className="mb-6">
              <p className="font-semibold mb-2">Color:</p>
              <div className="flex space-x-3">
                <div className="w-6 h-6 rounded-full bg-black border-2 border-primary cursor-pointer"></div>
                <div className="w-6 h-6 rounded-full bg-gray-400 border border-gray-300 cursor-pointer"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-semibold">Quantity:</label>
                <input type="number" defaultValue="1" min="1" className="w-20 p-2 border rounded-lg text-center" />
              </div>

              {/* --- ADD TO CART FUNCTION CONNECTED --- */}
              <button 
                onClick={() => onAddToCart(product)}
                className="bg-orange-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-orange-600 cursor-pointer transition-all"
              >
                Add to Cart
              </button>
              
              <button className="bg-gray-200 text-secondary py-3 rounded-lg font-bold text-lg hover:bg-gray-300 cursor-pointer transition-colors">
                Buy Now
              </button>
            </div>
          </section>
        </div>

        {/* Description Section */}
        <section className="mt-12 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-secondary mb-4 border-b pb-2">Product Description</h3>
            <p className="text-gray-700">
              {/* --- DYNAMIC DESCRIPTION --- */}
              {product.desc || "This premium product is carefully selected for our collection. High quality and durability guaranteed."}
            </p>
        </section>
      </main>

    
    </div>
  );
};

export default DetailsPage;