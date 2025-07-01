import React from "react";
import { Container, Typography, Box } from "@mui/material";

const BlogContent = ({ blog }) => {
  if (!blog) return <div className="text-center py-12 text-gray-500">Loading...</div>;

  console.log(blog.imageUrl)

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Blog Image */}
      {blog.imageUrl && (
        <Box className="mb-8">
          <img
            src={`/${blog.imageUrl}`}
            alt={blog.title}
            className="w-full h-auto rounded-xl shadow-md"
          />
        </Box>
      )}

      {/* Blog Title */}
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 2 }}
        className="text-center text-[#0C0520]"
      >
        {blog.title}
      </Typography>

      {/* Blog Subtitle (Optional) */}
      {blog.subtitle && (
        <Typography
          variant="subtitle1"
          className="text-center text-gray-500 mb-6"
        >
          {blog.subtitle}
        </Typography>
      )}

      {/* Blog Content */}
      <Box className="space-y-6 text-gray-800">
        {blog.content.map((block, idx) => {
          switch (block.type) {
            case "paragraph":
              return (
                <Typography key={idx} variant="body1" className="text-lg leading-relaxed">
                  {block.text}
                </Typography>
              );

            case "heading":
              return (
                <Typography key={idx} variant="h5" className="font-semibold text-[#0C0520] mt-6">
                  {block.text}
                </Typography>
              );

            case "quote":
              return (
                <Box
                  key={idx}
                  className="border-l-4 border-blue-400 pl-4 italic text-gray-600 bg-blue-50 py-2 px-3 rounded-md"
                >
                  “{block.text}”
                </Box>
              );

            case "code":
              return (
                <pre
                  key={idx}
                  className="bg-gray-900 text-white text-sm p-4 rounded-md overflow-x-auto font-mono"
                >
                  <code>{block.text}</code>
                </pre>
              );

            case "list":
              return (
                <ul key={idx} className="list-disc pl-6 space-y-1">
                  {block.items.map((item, i) => (
                    <li key={i} className="text-gray-800 text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              );

            default:
              return null;
          }
        })}
      </Box>
    </Container>
  );
};

export default BlogContent;

