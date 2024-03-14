import { Button } from "@/components/ui/button";
import Image from "next/image";

const HomeHero = () => {
  return (
    <section className="  py-10 lg:py-14  container flex flex-col lg:flex-row gap-10 lg:items-center">
      <div className=" basis-full lg:basis-1/2 space-y-5 lg:space-y-8">
        <h2 className=" max-w-[565px] text-3xl xl:text-5xl font-bold">
          Clinica ta stomatologică de încredere
        </h2>
        <p className=" max-w-[498px] text-sm font-medium text-skin-gray lg:text-base">
          Am creat o clinică stomatologică pe baza unui singur principiu:
          înțelegerea sănătății orale din perspectiva pacientului. Am construit
          o echipă talentată, am echipat fiecare cabinet și am pus bazele
          modului de funcționare astfel încât serviciile noastre răspund
          întocmai nevoilor pacienților – pe termen atât scurt, cât și lung.
        </p>
        <div className=" flex items-center gap-x-4">
          <Button>Despre noi</Button>
          <Button variant={"outline"}>Urgențe</Button>
        </div>
      </div>
      <div className=" basis-full lg:basis-1/2">
        <Image
          className=" w-full h-full object-cover rounded-full"
          width={903}
          height={602}
          src={"/hero.webp"}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default HomeHero;
