// src/components/layout/Header.jsx

import React from "react";
import { Link } from "react-router-dom";

// Note: Changed prop name to setsearchQuery (lowercase 's') to match your App.jsx
const Header = ({ cart = [], setsearchQuery }) => {
  return (
    <header className="w-full border-b border-gray-300 bg-white">

      {/* MAIN HEADER WRAPPER */}
      <div className="max-w-[1180px] mx-auto py-4 flex items-center justify-between gap-4 px-4 lg:px-0">

        {/* LOGO SECTION */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            src="/menu.png"
            alt="menu"
            className="w-6 h-6 lg:hidden cursor-pointer"
          />
          <div className="flex items-center lg:ml-0 ml-2">
            <img
              src="/logo-colored.png"
              alt="Logo"
              className="w-[120px] md:w-[150px] h-auto object-contain"
            />
          </div>
        </div>

        {/* SEARCH BAR (Desktop) */}
        <div className="hidden lg:flex flex-1 max-w-[665px] h-10 items-center border-2 border-blue-500 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            // CONNECTED SEARCH HERE
            onChange={(e) => setsearchQuery(e.target.value)}
            className="grow px-4 text-sm focus:outline-none text-gray-600"
          />

          <div className="h-full px-4 border-l border-gray-200 flex items-center bg-white cursor-pointer hover:bg-gray-50 whitespace-nowrap">
            <span className="text-sm text-gray-700">All category</span>
            <span className="ml-2 text-[10px] text-gray-500">▼</span>
          </div>

          <button className="h-full bg-blue-700 text-white px-8 font-medium transition-colors">
            Search
          </button>
        </div>

        {/* USER ICONS SECTION */}
        <div className="flex items-center gap-4 md:gap-6 shrink-0">
          <NavItem src="/Profile.png" label="Profile" />
          <NavItem src="/message.png" label="Message" hideMobile />
          <NavItem src="/Order.png" label="Orders" hideMobile />
          
          <Link to="/cart" className="flex flex-col items-center cursor-pointer relative">
            <div className="relative">
              <img src="/Cart.png" alt="Cart" className="w-6 h-6" />
              {cart?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
            <span className="text-xs mt-1">Cart</span>
          </Link>
        </div>

      </div>

      {/* MOBILE SEARCH BAR */}
      <div className="px-4 pb-3 lg:hidden">
        <div className="flex items-center border border-blue-500 rounded-lg overflow-hidden w-full bg-gray-50">
          <input
            type="text"
            placeholder="Search"
            // CONNECTED SEARCH HERE TOO
            onChange={(e) => setsearchQuery(e.target.value)}
            className="w-full p-2 text-sm focus:outline-none bg-transparent"
          />
          <button className="bg-blue-700 text-white px-5 py-2">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ src, label, hideMobile }) => (
  <div className={`${hideMobile ? 'hidden md:flex' : 'flex'} flex-col items-center cursor-pointer group`}>
    <img src={src} className="w-5 h-5 md:w-6 md:h-6 mb-1" alt={label} />
    <span className="hidden md:block text-[11px] text-gray-500 group-hover:text-blue-700">{label}</span>
  </div>
);

export default Header;