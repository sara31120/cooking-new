import React, { useState } from "react";

// Recipe Card Component
const RecipeCard = ({ image, title, time, category, alt }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-customBlue rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={alt}
          className="w-full h-48 object-cover rounded-lg"
        />
        {title && (
          <button
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
            onClick={handleFavoriteToggle}
          >
            <img
              src={
                isFavorite
                  ? process.env.PUBLIC_URL + "/images/heart.jpg" 
                  : process.env.PUBLIC_URL + "/images/heart2.jpg" 
              }
              alt="Heart Icon"
              className="w-7 h-7"
            />
          </button>
        )}
        <div className="p-4">
          {title && (
            <>
              <h2 className="font-bold text-lg mb-2">{title}</h2>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">
                  <i className="far fa-clock text-black"></i> {time}
                </span>
                <span>
                  <i className="fas fa-utensils text-black"></i> {category}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Recipes Component
const Recipes = () => {
  const recipeData = [
    {
      image: process.env.PUBLIC_URL + "/images/burger.jpg",
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      time: "30 Minutes",
      category: "Snack",
      alt: "Big and Juicy Wagyu Beef Cheeseburger",
    },
    {
      image: process.env.PUBLIC_URL + "/images/salmon.jpg",
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      time: "30 Minutes",
      category: "Fish",
      alt: "Fresh Lime Roasted Salmon with Ginger Sauce",
    },
    {
      image: process.env.PUBLIC_URL + "/images/pancake.jpg",
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      time: "30 Minutes",
      category: "Breakfast",
      alt: "Strawberry Oatmeal Pancake with Honey Syrup",
    },
    {
      image: process.env.PUBLIC_URL + "/images/salad.jpg",
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      time: "30 Minutes",
      category: "Healthy",
      alt: "Fresh and Healthy Mixed Mayonnaise Salad",
    },
    {
      image: process.env.PUBLIC_URL + "/images/kofta.jpg",
      title: "Chicken Meatballs with Cream Cheese",
      time: "30 Minutes",
      category: "Meat",
      alt: "Chicken Meatballs with Cream Cheese",
    },
    {
      ad: true,
      image: process.env.PUBLIC_URL + "/images/Ads.jpg",
      alt: "Advertisement",
    },
    {
      image: process.env.PUBLIC_URL + "/images/panck.jpg",
      title: "Fruity Pancake with Orange & Blueberry",
      time: "30 Minutes",
      category: "Dessert",
      alt: "Fruity Pancake with Orange & Blueberry",
    },
    {
      image: process.env.PUBLIC_URL + "/images/chickenrice.jpg",
      title: "The Best Easy One Pot Chicken and Rice",
      time: "30 Minutes",
      category: "Snack",
      alt: "The Best Easy One Pot Chicken and Rice",
    },
    {
      image: process.env.PUBLIC_URL + "/images/pasta.jpg",
      title: "The Creamiest Creamy Chicken and Bacon Pasta",
      time: "30 Minutes",
      category: "Noodles",
      alt: "The Creamiest Creamy Chicken and Bacon Pasta",
    },
  ];

  return (
    <div className="bg-white text-black font-Inter min-h-screen">
      {/* Header Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Simple and tasty recipes</h1>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {/* Recipes Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {recipeData.map((item, index) =>
          item.ad ? (
            <div
              key={index}
              className="ad-container flex justify-center items-center"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="ad-image shadow-lg"
              />
            </div>
          ) : (
            <RecipeCard key={index} {...item} />
          )
        )}
      </div>
    </div>
  );
};

export default Recipes;
