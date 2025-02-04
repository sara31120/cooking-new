import React, { useState } from "react";

const DeliciousRecipe = () => {
  const recipes = [
    {
      img: "/images/fruit.jpg",
      alt: "Mixed Tropical Fruit Salad",
      title: "Mixed Tropical Fruit Salad with Superfood Boosts",
      time: "30 Minutes",
      type: "Healthy",
    },
    {
      img: "/images/steak.jpg",
      alt: "Big and Juicy Wagyu Beef Cheeseburger",
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      time: "30 Minutes",
      type: "Western",
    },
    {
      img: "/images/japansalad.jpg",
      alt: "Healthy Japanese Fried Rice with Asparagus",
      title: "Healthy Japanese Fried Rice with Asparagus",
      time: "30 Minutes",
      type: "Healthy",
    },
    {
      img: "/images/taco.jpg",
      alt: "Cauliflower Walnut Vegetarian Taco Meat",
      title: "Cauliflower Walnut Vegetarian Taco Meat",
      time: "30 Minutes",
      type: "Eastern",
    },
    {
      img: "/images/rainbowsalad.jpg",
      alt: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
      title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
      time: "30 Minutes",
      type: "Healthy",
    },
    {
      img: "/images/sand.jpg",
      alt: "Barbeque Spicy Sandwiches with Chips",
      title: "Barbeque Spicy Sandwiches with Chips",
      time: "30 Minutes",
      type: "Snack",
    },
    {
      img: "/images/wrap.jpg",
      alt: "Firecracker Vegan Lettuce Wraps - Spicy!",
      title: "Firecracker Vegan Lettuce Wraps - Spicy!",
      time: "30 Minutes",
      type: "Seafood",
    },
    {
      img: "/images/soup.jpg",
      alt: "Chicken Ramen Soup with Mushroom",
      title: "Chicken Ramen Soup with Mushroom",
      time: "30 Minutes",
      type: "Japanese",
    },
  ];

  const [favorites, setFavorites] = useState(Array(recipes.length).fill(false));

  const toggleFavorite = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  };

  return (
    <>
      {/* Main Section */}
      <section className="bg-white py-16 px-8">
        {/* Title Section */}
        <div className="flex flex-col font-Inter md:flex-row items-start justify-between max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl font-Inter font-bold mb-4 md:mb-0 md:mr-6">
            Try this delicious recipe <br /> to make your day
          </h2>
          <p className="text-gray-500 font-Inter mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim.
          </p>
        </div>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={process.env.PUBLIC_URL + recipe.img}
                alt={recipe.alt}
                className="w-full h-40 object-cover"
              />
              {/* Heart Icon */}
              <button
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
                onClick={() => toggleFavorite(index)}
              >
                <img
                  src={
                    favorites[index]
                      ? process.env.PUBLIC_URL + "/images/heart.jpg"
                      : process.env.PUBLIC_URL + "/images/heart2.jpg"
                  }
                  alt="Heart Icon"
                  className="w-7 h-7"
                />
              </button>
              <div className="p-4">
                <h3 className="font-semibold font-Inter text-lg">
                  {recipe.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <span className="mr-4">
                    <i className="far fa-clock text-black"></i> {recipe.time}
                  </span>
                  <span>
                    <i className="fas fa-utensils text-black"></i> {recipe.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="relative">
            <img
              src={process.env.PUBLIC_URL + "/images/subscribe.jpg"}
              alt="Healthy Food"
              className="mx-auto rounded-lg"
            />
            <div className="absolute top-3/4 transform -translate-y-1/2 w-1/1 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center space-y-6 bg-customBlue shadow-lg rounded-xl p-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-black text-white px-6 py-2 rounded-r-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliciousRecipe;
