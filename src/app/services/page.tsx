import Services from "@/components/pages/home/services";
import Location from "@/components/shared/Location";
import { Metadata } from "next";
import Image from "next/image";

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
      <section className="  py-10 lg:py-14  container flex flex-col lg:flex-row gap-10 lg:items-center">
        <div className=" basis-full lg:basis-1/2 space-y-5 lg:space-y-8">
          <h2 className=" max-w-[565px] text-3xl xl:text-5xl font-bold">
            Servicii
          </h2>
          <p className=" max-w-[498px] text-sm font-medium text-skin-gray lg:text-base">
            Oferim o gama larga de servicii stomatologice. Suntem specializati
            in chirurgie si implantologie.
          </p>
        </div>
        <div className=" basis-full lg:basis-1/2">
          <Image
            className=" max-w-[600px] w-full h-full object-cover rounded-full"
            width={903}
            height={602}
            src={"/images/services.webp"}
            alt="hero"
          />
        </div>
      </section>
      <Services className=" !bg-none" />
      <Location />
    </>
  );
};

export default ServicesPage;
