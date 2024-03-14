const Implantology = () => {
  const ImplantologyData = [
    {
      name: "Extirpare vitală monoradiculari",
      price: "150",
    },
    {
      name: "Extirpare vitală monoradiculari",
      price: "200   ",
    },
    {
      name: "Obturație de canal monoradiculari",
      price: "200",
    },
  ];

  return (
    <div className=" container flex  flex-col lg:flex-row justify-between">
      <div className=" lg:min-h-[632px] basis-full lg:basis-[40%] bg-primary space-y-5 xl:space-y-7 p-6 md:p-10">
        <h2 className=" text-4xl font-normal text-white">Implantologie</h2>
        <p className=" text-sm sm:text-base font-normal text-white">
          În prețul implantului dentar sunt incluse: inserarea implantului,
          descoperirea implantului, bont vindecare și bont protetic. Dacă este
          nevoie de bont protetic angulat, se va achita diferența de preț. În
          cazul în care este necesară adiția de os și/sau membrană, vi se va
          comunica costul acestora la consultația de specialitate.
        </p>
        <p className=" text-sm sm:text-base font-normal text-white">
          Este posibil să fie necesare analizele medicale și CBCT (computer
          tomograf dentar).
        </p>
      </div>
      <div
        style={{ boxShadow: "0px 10px 40px 0px rgba(18, 18, 18, 0.10)" }}
        className=" bg-white basis-full pl-6 lg:basis-[60%] lg:pl-9 pr-7 py-14"
      >
        <ul className=" space-y-6">
          {ImplantologyData.map((data, index) => (
            <li
              key={data.name}
              className=" max-w-[90%] lg:max-w-[80%] flex items-center justify-between"
            >
              <span className="  inline-flex items-center gap-3">
                <span className=" w-4 h-4 bg-skin-tiffany rounded-full"></span>
                <span className=" text-xs md:text-base font-semibold">
                  {data.name}
                </span>
              </span>
              <span className=" text-xs md:text-base font-semibold">
                {data.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Implantology;
