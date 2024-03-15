import FixedProsthetics from "@/components/pages/prices/FixedProsthetics";
import Implantology from "@/components/pages/prices/Implantology";
import Orthodontics from "@/components/pages/prices/Orthodontics";
import PricesBanner from "@/components/pages/prices/PricesBanner";
import PricesHero from "@/components/pages/prices/hero";
import Location from "@/components/shared/Location";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://stoma-elite.vercel.app/"),
  title: {
    default: "Stoma Elite Prices",
    template: `%s | Stoma Elite Prices`,
  },
  description:
    "Oferim un spectru larg de servicii la același standard ridicat, de la proceduri de rutină precum albirea și curățarea profesională la ariile complexe ale implantologiei și ortodonției..",
  alternates: {
    canonical: `https://stoma-elite.vercel.app/`,
    languages: {
      en: "en-US",
    },
  },
};

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
