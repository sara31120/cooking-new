import React, { useState } from "react";

const RecipesPage = () => {
  const [checkedSteps, setCheckedSteps] = useState([false, false, false]);

  // Define recipes array
  const recipes = [
    {
      image: "/images/fruit.jpg",
      title: "Mixed Tropical Fruit Salad with Superfood Boosts ",
      time: "30 mins",
      category: "Healthy",
    },
    {
      image: "/images/steak.jpg",
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      time: "30 mins",
      category: "Westren",
    },
    {
      image: "/images/japansalad.jpg",
      title: "Healthy Japanese Fried Rice with Asparagus",
      time: "30 mins",
      category: "Healthy",
    },
    {
      image: "/images/taco.jpg",
      title: "Cauliflower Walnut Vegetarian Taco Meat",
      time: "30 mins",
      category: "Eastren",
    },
  ];

  // RecipeCard Component
  const RecipeCard = ({ image, title, time, category,recipe }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    return (
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
        <img src={recipe?.image} alt={title} className="w-full h-40 object-cover" />
        <button
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
          onClick={() => setIsFavorited(!isFavorited)}
        >
          {isFavorited ? (
            <img
              src="/images/heart.jpg"
              alt="Empty Heart Icon"
              className="w-7 h-7"
            />
          ) : (
            <img
              src="/images/heart2.jpg"
              alt="Filled Heart Icon"
              className="w-7 h-7"
            />
          )}
        </button>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{recipe?.title}</h3>
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

  const toggleCheck = (index) => {
    const updatedChecks = [...checkedSteps];
    updatedChecks[index] = !updatedChecks[index];
    setCheckedSteps(updatedChecks);
  };

  return (
    <div className="bg-white min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-black ml-2 mt-8">
            Healthy Japanese Fried Rice
          </h1>
          <div className="flex items-center space-x-4 ml-auto">
            <img
              src={process.env.PUBLIC_URL + "/images/print.jpg"}
              alt="Print"
              className="w-20 h-18"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/share.jpg"}
              alt="Share"
              className="w-20 h-18"
            />
          </div>
        </div>

        {/* Author and Details */}
        <div className="flex items-start space-x-6 mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={process.env.PUBLIC_URL + "/images/author2.jpg"}
              alt="Author"
              className="w-10 h-10 border-l rounded-full"
            />
            <div>
              <p className="text-black font-medium">John Smith</p>
              <p className="text-gray-500 text-sm">15 March 2022</p>
            </div>
          </div>
          <div className="flex space-x-6 pl-6 text-black">
            <img
              src={process.env.PUBLIC_URL + "/images/prep.jpg"}
              alt="Preparation time"
              className="w-22 border-l h-10"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/cook.jpg"}
              alt="Cook time"
              className="w-22 border-l h-10"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/chik.jpg"}
              alt="Chicken"
              className="w-20 border-l h-10"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex justify-between items-stretch space-x-8">
          <div className="flex-1 relative">
            <img
              src={process.env.PUBLIC_URL + "/images/friedrice.jpg"}
              alt="Japanese Fried Rice"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Nutrition Information */}
          <div className="w-72 h-full bg-customBlue shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4">
              Nutrition Information
            </h2>
            <ul className="divide-y divide-gray-300">
              <li className="flex justify-between text-gray-700 py-2">
                <span>Calories</span>
                <span className="font-bold">219.9 kcal</span>
              </li>
              <li className="flex justify-between text-gray-700 py-2">
                <span>Total Fat</span>
                <span className="font-bold">10.7 g</span>
              </li>
              <li className="flex justify-between text-gray-700 py-2">
                <span>Protein</span>
                <span className="font-bold">7.9 g</span>
              </li>
              <li className="flex justify-between text-gray-700 py-2">
                <span>Carbohydrate</span>
                <span className="font-bold">22.3 g</span>
              </li>
              <li className="flex justify-between border-t text-gray-700 py-2">
                <span>Cholesterol</span>
                <span className="font-bold">37.4 mg</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-10 mb-2 text-xs leading-relaxed">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Ingredients Section */}
        <section className="bg-white px-6 py-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
            {/* Ingredients */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <div>
                <h3 className="font-semibold text-lg mb-2">For main dish</h3>
                <ul className="space-y-7">
                  {[...Array(5)].map((_, index) => (
                    <IngredientItem
                      key={index}
                      text="Lorem ipsum dolor sit amet"
                    />
                  ))}
                </ul>
                <h3 className="font-semibold text-lg mt-6 mb-2">
                  For the sauce
                </h3>
                <ul className="space-y-7">
                  {[...Array(3)].map((_, index) => (
                    <IngredientItem
                      key={index}
                      text="Lorem ipsum dolor sit amet"
                    />
                  ))}
                </ul>
              </div>
            </div>

            {/* Other Recipes Section */}
            <div className="flex-1">
              <h2 className="text-lg font-bold text-black mb-6">
                Other Recipes
              </h2>
              {[
                {
                  src: "kofta.jpg",
                  title:
                    "Chicken Meatball with Creamy Cheese...By Andreas Paula",
                },
                {
                  src: "pasta.jpg",
                  title:
                    "The Creamiest Creamy Chicken and Pasta...By Andreas Paula",
                },
                {
                  src: "chickenrice.jpg",
                  title:
                    "The Best Easy One Pot Chicken and Rice...By Andreas Paula",
                },
              ].map((recipe, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img
                    src={process.env.PUBLIC_URL + `/images/${recipe.src}`}
                    alt={recipe.title}
                    className="w-[180px] h-[120px] rounded-lg object-cover mr-4"
                  />
                  <p className="text-black">{recipe.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Directions Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Directions</h2>
          {[1, 2, 3].map((step, index) => (
            <div key={step} className="mb-8 flex items-start space-x-4">
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full border-2 cursor-pointer ${
                  checkedSteps[index]
                    ? "bg-black border-white"
                    : "border-gray-300"
                }`}
                onClick={() => toggleCheck(index)}
              >
                {checkedSteps[index] && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {step}. Lorem ipsum dolor sit amet
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
                {step === 1 && (
                  <img
                    src={process.env.PUBLIC_URL + "/images/directions.jpg"}
                    alt="Cooking Step"
                    className="rounded-lg w-50"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Section */}
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

        {/* Recipe Cards Section */}
        <section className="py-16 px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {recipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                recipe={recipe}
                image={recipe.image}
                title={recipe.title}
                time={recipe.time}
                category={recipe.category}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Ingredient Item Component
function IngredientItem({ text }) {
  const [checked, setChecked] = useState(false);

  return (
    <li
      className="flex border-b items-center cursor-pointer"
      onClick={() => setChecked(!checked)}
    >
      <span
        className={`mr-6 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
          checked ? "bg-black border-white" : "border-gray-300"
        }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </span>
      <span>{text}</span>
    </li>
  );
}

export default RecipesPage;
