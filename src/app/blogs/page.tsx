// pages/blogs.js

import React from "react";
import Card from "./blogcard/blogcard";
import blogPosts from "../_lib/post";
import Image from "next/image";

const Blogs: React.FC = () => {
  return (
    <div>
      {/* Background Image Section  */}
      <div className="relative overflow-hidden h-[300px] flex items-center justify-center text-center ">
         <div className="absolute inset-0">
          <Image
            src="/bgimage.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-30"
          />
        </div>
      </div>

      {/* Blogs Section */}
      <div className="p-8 bg-[#c38a36dd]">
        <h2 className="text-3xl font-bold font-serif text-gray-800 mb-6 text-center">
          Blogs
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts && blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <Card
                key={post.id}
                heading={post.title}
                text={post.content.substring(0, 100) + "..."}
                image={post.image}
                blogid={post.id} // Blog ID being passed
              />
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No blogs available at the moment.
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default Blogs;
