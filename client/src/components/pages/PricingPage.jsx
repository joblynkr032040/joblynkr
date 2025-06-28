import PricingText from "./PricingText";
import PricingComponent from "../../components/reusable/PricingModal"

const Pricing = () => {

  return (
    <div className="p-8 bg-gray-50">
      <PricingText/>
      <PricingComponent/>
    </div>
  );
};

export default Pricing;
