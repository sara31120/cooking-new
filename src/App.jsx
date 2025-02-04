import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Categories from "./pages/Categories";
import Recipes from "./components/recipes/Recipes";
import Chef from "./pages/Chef";
import DeliciousRecipe from "./components/recipes/DeliciousRecipe";
import Footer from "./components/Layout/Footer";
import RecipesPage from "./components/recipes/RecipesPage";
import Blog from "./pages/Blog";
import ArticlePage from "./pages/ArticlePage";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Navbar */}
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories />
                <Recipes />
                <Chef />
                <DeliciousRecipe />
              </>
            }
          />
          <Route path="/recipesPage" element={<RecipesPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/articles/full-guide" element={<ArticlePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
