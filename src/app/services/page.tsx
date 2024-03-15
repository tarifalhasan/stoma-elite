import Services from "@/components/pages/home/services";
import Location from "@/components/shared/Location";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://stoma-elite.vercel.app/"),
  title: {
    default: "Stoma Elite Services",
    template: `%s | Stoma Elite Services`,
  },
  description:
    "Oferim o gama larga de servicii stomatologice. Suntem specializati in chirurgie si implantologie.",
  alternates: {
    canonical: `https://stoma-elite.vercel.app/`,
    languages: {
      en: "en-US",
    },
  },
};

const ServicesPage = () => {
  return (
    <>
      <Services className=" !bg-none" />
      <Location />
    </>
  );
};

export default ServicesPage;
