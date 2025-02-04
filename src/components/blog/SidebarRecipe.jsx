import React from "react";

const SidebarRecipe = ({ image, title, author }) => {
  return (
    <div className="flex items-center mb-4">
      <img src={process.env.PUBLIC_URL + image} alt={title} className="w-25 h-20 rounded-lg object-cover mr-4" />
      <p className="text-gray-700 font-bold text-xs">
        {title} <br /> By {author}
      </p>
    </div>
  );
};

export default SidebarRecipe;
