import React from 'react';
import BlogText from "../BlogComponents/BlogText";
import BlogCard from "../BlogComponents/BlogCard";
import { Container } from '@mui/material';
import {blogData} from "../../assets/blogData"



function BlogPage() {
  return (
    <Container maxWidth="lg">
      {/* Header */}
      <BlogText />

      {/* Blog Cards Grid */}
      <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 place-items-center mb-5">
        {blogData.map((blog, idx) => (
  <div
    key={idx}
    className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-blue-200 rounded-xl"
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
  );
}

export default BlogPage;
