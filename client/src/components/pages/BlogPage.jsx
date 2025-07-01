import React from 'react';
import BlogText from "../BlogComponents/BlogText";
import BlogCard from "../BlogComponents/BlogCard";
import { Container } from '@mui/material';
import { blogData } from "../../assets/blogData";

function BlogPage() {
  return (
    <div className="bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#fef9c3] min-h-screen rounded-2xl pb-16">
      <Container maxWidth="lg">
        {/* Hero Section */}
        <div className="text-center pt-20 pb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight drop-shadow-sm">
            Explore Our Latest Blogs
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Insights, tips, and career strategies to help you grow — every week.
          </p>
        </div>

        {/* BlogText Component (Optional) */}
        {/* <div className="mb-6">
          <BlogText />
        </div> */}
        

        {/* Blog Cards Grid */}
        <div className="grid gap-10 mt-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {blogData.map((blog, idx) => (
            <div
              key={idx}
              className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl hover:shadow-blue-200 transition-transform duration-300 transform hover:scale-[1.04]"
            >
              <BlogCard
                imageUrl={blog.imageUrl}
                title={blog.title}
                subtitle={blog.subtitle}
                slug={blog.slug}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default BlogPage;
