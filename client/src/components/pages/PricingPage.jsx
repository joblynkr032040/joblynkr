

import React from "react";
import PricingText from "./PricingText";
import PricingComponent from "../../components/reusable/PricingModal";

const Pricing = () => {
  return (
    <section className="px-5 py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <PricingText />
        <PricingComponent />
      </div>
    </section>
  );
};

export default Pricing;

