import Image from "next/image";

const PricesHero = () => {
  return (
    <section className="  py-10 lg:py-14  container flex flex-col lg:flex-row gap-10 lg:items-center">
      <div className=" basis-full lg:basis-1/2 space-y-5 lg:space-y-8">
        <h2 className=" max-w-[565px] text-3xl xl:text-5xl font-bold">
          Prețuri
        </h2>
        <p className=" max-w-[498px] text-sm font-medium text-skin-gray lg:text-base">
          Oferim un spectru larg de servicii la același standard ridicat, de la
          proceduri de rutină precum albirea și curățarea profesională la ariile
          complexe ale implantologiei și ortodonției.
        </p>
      </div>
      <div className=" basis-full lg:basis-1/2">
        <Image
          className=" w-full h-full object-cover rounded-full"
          width={903}
          height={602}
          src={"/images/prices.webp"}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default PricesHero;
