const PricesBanner = () => {
  return (
    <div className=" md:mb-20 container   relative py-5">
      <div
        className="  hidden lg:block w-[150px]  h-[100px]  md:w-[444px] absolute top-1/2 -translate-y-1/2 left-0  md:h-[245px] "
        style={{
          backgroundImage: `url('/images/emerjengy-mask.webp')`,
          backgroundSize: "100% 100%",
        }}
      ></div>
      <div className=" ml-auto max-w-full h-[60px] md:h-[146px] bg-primary flex flex-col items-center  justify-center ">
        <p className="  lg:pl-[20rem] xl:pl-[10rem] 2xl:pl-0 text-lg xl:text-xl font-bold text-white">
          Tariful tratamentului de urgență este de 150 RON
        </p>
      </div>
    </div>
  );
};

export default PricesBanner;
