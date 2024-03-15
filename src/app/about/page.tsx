import Cabinet from "@/components/pages/about/cabinet";
import AboutHero from "@/components/pages/about/hero";
import Location from "@/components/shared/Location";
import Emergency from "@/components/shared/emergency";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://stoma-elite.vercel.app/"),
  title: {
    default: "Stoma Elite about",
    template: `%s | Stoma Elite about`,
  },
  description:
    "Oferim un spectru larg de servicii la același standard ridicat, de la proceduri de rutină precum albirea și curățarea profesională la ariile complexe ale implantologiei și ortodonției.",
  alternates: {
    canonical: `https://stoma-elite.vercel.app/`,
    languages: {
      en: "en-US",
    },
  },
};

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <Cabinet />
      <Emergency />
      <Location />
    </>
  );
};

export default AboutUs;
