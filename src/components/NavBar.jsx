import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/Foodieland.jpg"}
              alt="Foodieland"
              className=""
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-10">
          <Link
            to="/"
            className="text-gray-900 font-medium hover:text-gray-600 lg:text-2xl text-sm"
          >
            Home
          </Link>
          <Link
            to="/RecipesPage"
            className="text-gray-900 font-medium hover:text-gray-600"
          >
            Recipes
          </Link>
          <Link
            to="/Blog"
            className="text-gray-900 font-medium hover:text-gray-600"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-gray-900 font-medium hover:text-gray-600"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-gray-900 font-medium hover:text-gray-600"
          >
            About us
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-black hover:text-gray-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
