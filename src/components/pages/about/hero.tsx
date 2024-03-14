import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="  py-10 lg:py-14  container flex flex-col lg:flex-row gap-10 lg:items-center">
      <div className=" basis-full lg:basis-1/2 space-y-5 lg:space-y-8">
        <h2 className=" max-w-[565px] text-3xl xl:text-5xl font-bold">
          Despre noi
        </h2>
        <p className=" max-w-[498px] text-sm font-medium text-skin-gray lg:text-base">
          Filosofia Dental Implant Clinic s-a dezvoltat prin observarea
          obiceiurilor de îngrijire a propriei sănătăți orale în România, a
          interacțiunii medic-pacient și a așteptărilor presupuse de alegerea
          unei clinici noi.
        </p>
      </div>
      <div className=" basis-full lg:basis-1/2">
        <Image
          className=" w-full h-full object-cover rounded-full"
          width={903}
          height={602}
          src={"/images/about.webp"}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default AboutHero;
