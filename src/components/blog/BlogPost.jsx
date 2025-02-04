import React from "react";
import { Link } from "react-router-dom";


const BlogPost = ({
  image,
  title,
  description,
  authorImg,
  authorName,
  date,
  link,
}) => {
  return (
    <Link to={link || "#"}>
      <div className="flex max-w-2xl mb-8">
        <img
          src={process.env.PUBLIC_URL + image}
          alt={title}
          className="w-1/3 object-cover ml-6 rounded-lg"
        />
        <div className="ml-8 w-2/3">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center">
            <img
              src={process.env.PUBLIC_URL + authorImg}
              alt={authorName}
              className="w-10 h-10 rounded-full mr-3"
            />
            <p className="text-black font-Inter">
              {authorName} | <span className="text-gray-600">{date}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
