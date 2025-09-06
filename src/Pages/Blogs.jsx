import React from "react";
import { useLoaderData } from "react-router";

const Blogs = () => {
  const posts = useLoaderData();

  return (
    <div className="mt-5 mb-10">
      <div className="container mx-auto px-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-100 border border-base-300 mb-4 rounded-lg"
          >
            <input
              type="radio"
              name="blog-accordion"
              defaultChecked={index === 0}
            />
            <div className="collapse-title font-semibold text-lg">
              {post.question}
            </div>
            <div className="collapse-content text-gray-700 text-sm">
              {post.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;