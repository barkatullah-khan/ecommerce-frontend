import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const DealsAndOffer = ({ items }) => {
    return (
<div className="w-full max-w-[1180px] mx-auto border border-[#DEE2E7] rounded-lg mb-3 bg-white flex flex-col md:flex-row md:h-60 overflow-hidden">

          {/* 1. LEFT SECTION (Deals & Timer) */}
      <div className="w-full md:w-[281px] p-5 shrink-0 border-b md:border-b-0 md:border-r border-[#DEE2E7] flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4">
            <div className="flex flex-col">
              <h2 className="font-semibold text-[18px] md:text-[20px] leading-6 md:leading-7 tracking-tight">
                Deals and offers
              </h2>
              <p className="text-gray-500 text-xs md:text-sm">Hygiene equipments</p>
            </div>

            <div className="flex gap-3 md:gap-4">
              {['Days', 'Hour', 'Min', 'Sec'].map((label) => (
            <div key={label} className="w-11 h-12 md:w-[45px] md:h-[50px] bg-[#3e4042] text-white rounded flex flex-col items-center justify-center">
                  <span className="font-bold text-[14px] md:text-[16px] leading-none">00</span>
                  <span className="text-[10px] md:text-[12px] opacity-80">{label}</span>
                </div>
              ))}
            </div>
          </div>

      {/* 2. PRODUCT SECTION (Dynamic Link logic) */}
          <div className="flex overflow-x-auto md:overflow-hidden w-full scrollbar-hide">
        {items.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`} // Takes user to DetailsPage
            className="min-w-[140px] md:flex-1 flex flex-col items-center justify-center border-r border-[#DEE2E7] p-4 shrink-0 last:border-r-0 hover:bg-gray-50 transition-colors"
              >
            <img src={product.img} className="w-24 h-24 md:w-[120px] md:h-[120px] object-contain" alt={product.title} />
            <p className="mt-3 text-gray-700 text-sm text-center">{product.title}</p>
                <p className="mt-1 bg-[#FFE3E3] text-[#EB001B] text-xs font-semibold px-3 py-1 rounded-full">
              {product.discount}
                </p>
          </Link>
            ))}
          </div>
        </div>
  );
};

export default DealsAndOffer;