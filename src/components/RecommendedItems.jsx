import React from "react";
import { Link } from "react-router-dom"; // 1. Import Link

const RecommendedItems = ({ items }) => {
  return (
 <section className="w-full max-w-[1180px] mx-auto mb-5 px-4 md:px-0">
          <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-6">
            Recommended items
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          /* 2. Wrap the card in a Link using the item's unique ID */
          <Link 
            to={`/product/${item.id}`} 
            key={item.id} 
                  className="bg-white border border-[#EEEEEE] rounded-md p-4 flex flex-col hover:shadow-md transition-shadow cursor-pointer"
                >
                  {/* Product Image Wrapper */}
                  <div className="h-[170px] flex items-center justify-center mb-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Price */}
                  <span className="text-base font-medium text-[#1C1C1C]">
              ${item.price}
                  </span>

                  {/* Title / Description */}
                  <p className="text-sm text-[#8B96A5] mt-1 leading-tight line-clamp-2">
                    {item.title}
                  </p>
          </Link>
        ))}
          </div>
        </section>
  );
};

export default RecommendedItems;