const Location = () => {
  return (
    <section className=" py-5  space-y-5 lg:space-y-8 sm:py-12 xl:py-20">
      <div className=" space-y-1 container flex flex-col items-center justify-center">
        <span className=" text-sm font-bold text-primary">Locație</span>
        <h2 className=" text-2xl xl:text-3xl font-bold">Unde ne puteți găsi</h2>
      </div>
      <div
        style={{
          backgroundImage: `url('/images/location.webp')`,
          backgroundSize: "100% 100%",
        }}
        className=" relative overflow-hidden  h-[400px] bg-no-repeat r w-full"
      >
        <div className=" absolute right-5 sm:right-[10%] max-w-[90%]  w-full   -translate-y-[80%] top-[80%] sm:max-w-[392px] bg-primary p-5 space-y-4">
          <div>
            <h2 className=" text-base font-medium text-white">Adresă</h2>
            <p className=" text-base font-normal text-white">
              Strada Doamna Oltea 10 Floreasca, Sector 2,București{" "}
            </p>
          </div>
          <div>
            <h2 className=" text-base font-medium text-white">
              Program Clinică
            </h2>
            <ul className=" space-y-[2px] pt-1">
              <li className="flex  items-center justify-between">
                <p className=" text-base font-normal text-white">
                  Luni – Vineri
                </p>
                <p className=" text-base font-normal text-white">
                  8:00 – 22:00
                </p>
              </li>
              <li className="flex  items-center justify-between">
                <p className=" text-base font-normal text-white">
                  Sâmbătă-Duminică
                </p>
                <p className=" text-base font-normal text-white">
                  10:00 – 20:00
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
