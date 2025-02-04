import { useState } from "react";
import Pagination from "../components/blog/Pagination";
import BlogPost from "../components/blog/BlogPost";
import SidebarRecipe from "../components/blog/SidebarRecipe";
import SubscriptionForm from "../components/blog/SubscriptionForm";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="bg-white min-h-screen font-Inter">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold">Blog & Article</h1>
        <p className="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center items-center mt-6">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search articles, news, or recipes..."
              className="w-full h-14 px-4 py-2 pr-16 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-black text-white px-10 rounded-full text-lg hover:bg-gray-800">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex max-w-7xl md:max-w-10 lg:max-w-10  mx-auto px-6">
        <div className="w-2/3 pr-8">
          {/* Blog Posts */}
          <BlogPost
            image="/images/soup.jpg"
            title="Crochet Projects for Noodle Lovers"
            description="Lorem ipsum dolor sit amet..."
            authorImg="/images/women.jpg"
            authorName="Wade Warren"
            date="12 November"
          />
          <BlogPost
            image="/images/fruit.jpg"
            title="10 Vegetarian Recipes To Eat This Month"
            description="Lorem ipsum dolor sit amet..."
            authorImg="/images/man.jpg"
            authorName="Robert Fox"
            date="12 November"
          />
          <BlogPost
            image="/images/cooker.jpg"
            title="Full Guide to Becoming a Professional Chef"
            description="Lorem ipsum dolor sit amet..."
            authorImg="/images/women3.jpg"
            authorName="Dianne Russell"
            date="12 November"
            link="/articles/full-guide"
          />
          <BlogPost
            image="/images/lazania.jpg"
            title="Simple & Delicious Vegetarian Lasagna"
            description="Lorem ipsum dolor sit amet..."
            authorImg="/images/women4.jpg"
            authorName="Leslie Alexander"
            date="12 November"
          />
          <BlogPost
            image="/images/food.jpg"
            title="Plantain and Pinto Stew with Aji Verde"
            description="Lorem ipsum dolor sit amet..."
            authorImg="/images/auth.jpg"
            authorName="Leslie Alexander"
            date="12 November"
          />
          <BlogPost
            image="/images/com.jpg"
            title="10 Easy Step-by-Step Vegan Recipes"
            description="Lorem ipsum dolor sit amet..."
            authorImg="/images/women.jpg"
            authorName="Wade Warren"
            date="12 November"
          />

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

        {/* Sidebar Section */}
        <div className="w-1/3">
          <div className="mb-12">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Tasty Recipes
            </h2>
            <SidebarRecipe
              image="/images/kofta.jpg"
              title="Chicken Meatball with Creamy Cheese..."
              author="Andreas Paula"
            />
            <SidebarRecipe
              image="/images/pasta.jpg"
              title="Traditional Bolognaise Ragu..."
              author="Andreas Paula"
            />
            <SidebarRecipe
              image="/images/pork.jpg"
              title="Pork and Chive Chinese Dumplings..."
              author="Andreas Paula"
            />

            {/* Promotional Banner */}
            <div className="">
              <img
                src={process.env.PUBLIC_URL + "/images/Ads.jpg"}
                alt="Healthy Food"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <SubscriptionForm />
    </div>
  );
};

export default Blog;
