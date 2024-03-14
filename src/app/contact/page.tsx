import Location from "@/components/shared/Location";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Conatct = () => {
  return (
    <>
      <section className="  py-10 lg:py-14  container flex flex-col lg:flex-row gap-10 lg:items-center">
        <div className=" basis-full lg:basis-1/2 space-y-5 lg:space-y-8">
          <h2 className=" max-w-[565px] text-3xl xl:text-5xl font-bold">
            Contact
          </h2>
          <p className=" max-w-[498px] text-sm font-medium text-skin-gray lg:text-base">
            Va asteptam sa ne vizitati cu sau fara programare de luni pana
            duminica.
          </p>
          <Button>Programează-te</Button>
        </div>
        <div className=" basis-full lg:basis-1/2">
          <Image
            className=" w-full h-full object-cover rounded-full"
            width={903}
            height={602}
            src={"/images/contact.webp"}
            alt="hero"
          />
        </div>
      </section>
      <Location />
    </>
  );
};

export default Conatct;
