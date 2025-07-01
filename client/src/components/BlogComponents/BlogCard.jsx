import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ imageUrl, title, subtitle, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${slug}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.025] hover:shadow-lg hover:shadow-blue-100"
      sx={{
        width: 350,
        minHeight: 420, // Ensures uniform height for all cards
        backgroundColor: "#ffffff",
        borderRadius: "1.5rem",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.05)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image section */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        sx={{
          height: 200,
          width: "100%", 
          objectFit: "cover",
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
        }}
      />
      </div>

      {/* Text section */}
      <CardContent className="px-5 py-4 flex flex-col flex-grow">
        <Typography
          variant="h6"
          component="div"
          className="text-[#111827] font-semibold leading-snug text-[1.1rem]"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          className="text-gray-600 mt-2 leading-relaxed"
        >
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
