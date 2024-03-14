import Emergency from "@/components/common/emergency";
import HomeHero from "@/components/pages/home/hero";
import Medici from "@/components/pages/home/medici";
import Services from "@/components/pages/home/services";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Medici />
      <Services />
      <Emergency />
    </>
  );
}
