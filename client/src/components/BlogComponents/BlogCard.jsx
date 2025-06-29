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
      className="rounded-3xl shadow-sm transition-transform hover:scale-[1.01] duration-200 cursor-pointer"
      sx={{
        width: 350,
        backgroundColor: "#F9F9F9",
        borderRadius: "1.5rem",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
        sx={{
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          className="text-[#0C0520] font-semibold leading-snug"
        >
          {title}
        </Typography>
        <Typography variant="body2" className="text-gray-500 mt-2">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
