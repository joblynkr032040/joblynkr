import React from "react";
import { Typography } from "@mui/material";

const BlogText = () => {
  return (
    <div className="text-center py-12 bg-white">
      {/* Title */}
      <Typography variant="h3" component="h1" className="!font-semibold">
        <span className="text-black">Blog by </span>
        <span className="text-[#2C77FF] italic">JobLynkr</span>
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        className="mt-4 text-gray-500 tracking-wide"
      >
        Stay updated with the latest trends, tips, and insights in career advice.
      </Typography>
    </div>
  );
};

export default BlogText;
