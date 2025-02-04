import React from "react";

const CategoryCard = ({ img, alt, title, gradient }) => {
  return (
    <div className="flex flex-col items-center p-4 transition transform hover:scale-105">
      <div
        className="flex flex-col justify-center items-center w-full h-36 rounded-xl"
        style={{ background: gradient }}
      >
        <img
          src={process.env.PUBLIC_URL + img}
          alt={alt}
          className="w-24 h-24 object-contain"
        />
        <h3 className="text-base font-semibold text-black mt-2">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
