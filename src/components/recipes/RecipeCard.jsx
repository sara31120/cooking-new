import React, { useState } from "react";

const FavoriteButton = ({ isFavorited, onClick }) => {
  return (
    <button
      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      <img
        src={isFavorited ? "/images/heart.jpg" : "/images/heart2.jpg"}
        alt={isFavorited ? "Filled Heart Icon" : "Empty Heart Icon"}
        className="w-7 h-7"
      />
    </button>
  );
};

const RecipeCard = ({ image, title, time, category }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <FavoriteButton
        isFavorited={isFavorited}
        onClick={() => setIsFavorited(!isFavorited)}
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <span className="mr-4">
            <i className="far fa-clock text-black"></i> {time}
          </span>
          <span>
            <i className="fas fa-utensils text-black"></i> {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

  