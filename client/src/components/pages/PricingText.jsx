import React from 'react';

const PricingText = () => {
  return (
    <div className="flex flex-col items-center text-center py-8 px-4">
      <h1 className="text-4xl font-bold">
        Create content the <span className="text-blue-500 italic">lazy way</span>
      </h1>
      <p className="text-gray-500 mt-4">
        All our plans include a 7-day free trial and a 30-day refund policy <br/> on the 1st payment.
      </p>
    </div>
  );
};

export default PricingText;
