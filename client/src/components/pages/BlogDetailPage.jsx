// import React from "react";
// import BlogContent from "../BlogComponents/BlogContent";
// import { useParams } from "react-router-dom";
// import { blogData } from "../../assets/blogData";


// const BlogDetailPage = () => {
//   const { slug } = useParams();
//   const blog = blogData[slug];

//   return <BlogContent blog={blog} />;
// };

// export default BlogDetailPage;


import React from "react";
import { useParams } from "react-router-dom";
import BlogContent from "../BlogComponents/BlogContent";
import { blogData } from "../../assets/blogData";

const BlogDetailPage = () => {
  const { slug } = useParams();

  // Find blog with matching slug
  const blog = blogData.find((item) => item.slug === slug);

  // Optional: fallback if slug doesn't exist
  if (!blog) {
    return <div className="text-center py-20 text-xl font-semibold text-gray-600">Blog not found.</div>;
  }

  return <BlogContent blog={blog} />;
};

export default BlogDetailPage;
