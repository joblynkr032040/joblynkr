import React from 'react';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      <ErrorOutlineIcon style={{ fontSize: 80, color: '#ff1744' }} />
      <h1 className="text-5xl font-bold mt-4 text-gray-900">404</h1>
      <p className="text-lg text-gray-600 mt-2">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
