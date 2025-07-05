// components/FeaturedCard.js
import React from 'react';

const FeaturedCard = ({ image, category, title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-[320px] sm:w-[400px] md:w-[480px] bg-gradient-to-b from-[#0d0d22] to-[#1b005b] rounded-[32px] overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="h-60 relative">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col justify-between gap-4 bg-[#0b0c1c]">
        <div className="text-xs font-semibold text-gray-300 bg-gray-700 px-2 py-1 rounded w-fit">
          {category}
        </div>
        <h4 className="text-white text-xl font-semibold leading-snug">
          {title}
        </h4>
        <div className="text-blue-400 hover:text-blue-500 text-sm font-medium flex items-center gap-1">
          Read article →
        </div>
      </div>
    </a>
  );
};

export default FeaturedCard;
