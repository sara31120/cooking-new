import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section*/}
        <div className="text-center md:text-left">
          <img src={process.env.PUBLIC_URL + "/images/Foodieland.jpg"} alt="" />
          <p className="text-gray-500 mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        {/* Center Section*/}
        <ul className="flex space-x-6 mt-6 md:mt-0">
          <li>
            <a
              href="#"
              className="text-black hover:text-black font-Inter font-semibold text-sm"
            >
              Recipes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black hover:text-black font-Inter font-semibold text-sm"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black hover:text-black font-Inter font-semibold text-sm"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black hover:text-black font-Inter font-semibold text-sm"
            >
              About us
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="mt-8  border-t border-gray-200 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          © 2020 Flowbase. Powered by <span class="text-red-500">Webflow</span>
        </p>
        <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-black hover:text-black">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-black hover:text-black">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-black hover:text-black">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
