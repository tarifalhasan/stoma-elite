import FixedProsthetics from "@/components/pages/prices/FixedProsthetics";
import Implantology from "@/components/pages/prices/Implantology";
import Orthodontics from "@/components/pages/prices/Orthodontics";
import PricesBanner from "@/components/pages/prices/PricesBanner";
import PricesHero from "@/components/pages/prices/hero";
import Location from "@/components/shared/Location";

const Prices = () => {
  return (
    <>
      <PricesHero />
      <PricesBanner />
      <div className=" space-y-8 lg:space-y-16">
        <Orthodontics />
        <Implantology />
        <FixedProsthetics />
      </div>

      <Location />
    </>
  );
};

export default Prices;
