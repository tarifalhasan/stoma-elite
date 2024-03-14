import HomeHero from "@/components/pages/home/hero";
import Medici from "@/components/pages/home/medici";
import Services from "@/components/pages/home/services";
import Location from "@/components/shared/Location";
import Emergency from "@/components/shared/emergency";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Medici />
      <Services />
      <Emergency />
      <Location />
    </>
  );
}
