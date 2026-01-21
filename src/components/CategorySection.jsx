import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link for navigation

const CategorySection = ({ title, bannerImg, items, onAddToCart }) => { // 2. Catch onAddToCart prop
  return (
    <div className="w-full max-w-[1180px] mx-auto mb-6">
      <h4 className="text-lg md:text-xl font-semibold text-[#1C1C1C] mb-3 px-4 md:px-0 md:hidden">
        {title}
      </h4>

      <section className="w-full bg-white border-y md:border border-[#DEE2E7] rounded-md md:rounded-lg overflow-hidden mb-5">
        <div className="flex flex-col md:flex-row h-full">
          
          {/* Left Banner */}
          <div 
            className="hidden md:flex relative w-[280px] h-[257px] shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${bannerImg}')` }}
          >
            <div className="absolute bg-[#FFE8BA66] inset-0 p-4 flex flex-col items-start">
              <h4 className="text-lg font-semibold text-[#1C1C1C] max-w-[150px]">{title}</h4>
              <button className="mt-2 bg-white text-sm px-3 py-1 rounded shadow">Source now</button>
            </div>
          </div>

          {/* Items Grid */}
          <div className="flex flex-row md:grid md:grid-cols-4 flex-1 h-full overflow-x-auto md:overflow-hidden scrollbar-hide">
            {items.map((item, index) => (
              <div key={index} className="bg-white border-r border-gray-100 min-w-[140px] md:min-w-0 h-auto md:h-32 shrink-0 md:shrink flex flex-col md:relative p-4 last:border-r-0 hover:bg-gray-50 transition-colors">
                
                {/* 3. Wrap Image in Link to go to Details Page */}
                <div className="flex justify-center md:absolute md:bottom-2 md:right-2">
                  <Link to={`/product/${item.id}`}>
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-24 h-24 md:w-16 md:h-16 object-contain cursor-pointer" 
                    />
                  </Link>
                </div>

                <div className="mt-3 md:mt-0 md:absolute md:top-2 md:left-3 text-center md:text-left">
                  <p className="text-sm font-medium text-[#1C1C1C] md:truncate">{item.title}</p>
                  <p className="text-xs text-gray-400 mt-1 md:text-gray-500">
                    USD {item.price}
                  </p>
                  
                  {/* 4. Small Add to Cart Button */}
                  <button 
                    onClick={() => onAddToCart(item)}
                    className="mt-2 text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-200 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    + Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategorySection;