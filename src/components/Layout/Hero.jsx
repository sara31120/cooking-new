import React from "react";
import PlayIcon from "../../assets/icons/PlayIcon";
import { FaClock, FaUtensils } from "react-icons/fa"; // Import FontAwesome icons
import PlayCircle from "../../assets/icons/PlayIcon";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen">
      {/* Background Container */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[90%] h-[550px] bg-customBlue rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl"></div>{" "}
      {/* Curved corners */}
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl w-full px-10">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Hot Recipes Badge */}
          <button className="inline-flex items-center bg-white px-4 py-2 ml-9 space-y-1 rounded-full hover:bg-gray-50 shadow-md">
            <img
              src={process.env.PUBLIC_URL + "/images/recipy.jpg"}
              alt="Hot Recipes"
              className="w-6 h-6"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">
              Hot Recipes
            </span>
          </button>

          {/* Title */}
          <h1 className="text-5xl font-bold font-inter text-black ml-9 leading-tight">
            Spicy delicious <br /> chicken wings
          </h1>

          {/* Description */}
          <p className="text-gray-600 ml-9 font-inter text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim.
          </p>

          {/* Info Tags */}
          <div className="flex items-center ml-9 space-x-4">
            {/* Clock Icon for 30 Minutes */}
            <button className="flex items-center bg-gray-200 px-4 py-2 rounded-full">
            <i class="fa-solid fa-clock"></i>
              <span className="ml-2 text-black">30 Minutes</span>
            </button>
            {/* Fork & Knife Icon for Chicken */}
            <button className="flex items-center bg-gray-200 px-4 py-2 rounded-full">
            <i class="fa-solid fa-utensils"></i>
              <span className="ml-2 text-gray-700">Chicken</span>
            </button>
          </div>

          {/* Author Info & Button */}
          <div className="flex items-center justify-between mt-6 space-y-10">
            <div className="flex ml-10 items-center">
              <img
                src={process.env.PUBLIC_URL + "/images/author2.jpg"}
                alt="Author"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-5">
                <p className="text-black font-semibold">John Smith</p>
                <p className="text-gray-500 text-sm">15 March 2022</p>
              </div>
            </div>
            <button className="flex items-center bg-black text-white px-8 py-3 rounded-full shadow-md hover:bg-gray-900">
              <span>View Recipes</span>
              {/* Play Icon (SVG) */}
              <PlayIcon />
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full lg:w-1/2 ml-9 flex justify-center">
          <img
            src={process.env.PUBLIC_URL + "/images/chickenwings.jpg"}
            alt="Chicken Wings"
            className="w-[100%] h-[540px] object-cover rounded-3xl shadow-lg -translate-y-3"
          />
        </div>
      </div>
      {/* Handpicked Recipes Badge */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20 -translate-y-40">
        <img
          src={process.env.PUBLIC_URL + "/images/badge.jpg"}
          alt="Handpicked Recipes"
          className="h-40 w-40"
        />
      </div>
    </section>
  );
};

export default Hero;
