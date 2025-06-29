// components/Container.jsx
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'; // Optional for cleaner class merging

const Container = ({ children, className = '' }) => {
  return (
    <div className={clsx("max-w-[90%] mx-auto px-2 sm:px-4 lg:px-6", className)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
