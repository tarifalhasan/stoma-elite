import HomeHero from "@/components/pages/home/hero";
import Medici from "@/components/pages/home/medici";
import Services from "@/components/pages/home/services";
import Location from "@/components/shared/Location";
import Emergency from "@/components/shared/emergency";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://stoma-elite.vercel.app/"),
  title: {
    default: "Stoma Elite",
    template: `%s | Stoma Elite`,
  },
  description:
    "Am creat o clinică stomatologică pe baza unui singur principiu: înțelegerea sănătății orale din perspectiva pacientului. Am construit o echipă talentată, am echipat fiecare cabinet și am pus bazele modului de funcționare astfel încât serviciile noastre răspund întocmai nevoilor pacienților – pe termen atât scurt, cât și lung.",
  alternates: {
    canonical: `https://stoma-elite.vercel.app/`,
    languages: {
      en: "en-US",
    },
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <Medici />
      <Services className="bg-skin-tiffany " />
      <Emergency />
      <Location />
    </>
  );
}
