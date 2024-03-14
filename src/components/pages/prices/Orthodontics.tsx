const Orthodontics = () => {
  const OrthodonticsData = [
    {
      name: "Extirpare vitală monoradiculari",
      price: "150",
    },
    {
      name: "Extirpare vitală pluriradiculari",
      price: "200   ",
    },
    {
      name: "Obturație de canal monoradiculari",
      price: "200",
    },
    {
      name: "Obturație de canal pluriradiculari",
      price: "200",
    },
    {
      name: "Dezobturare / canal",
      price: "200",
    },
    {
      name: "Tratament canal calciu, antiseptic",
      price: "200",
    },
    {
      name: "Coafaj indirect",
      price: "200",
    },
    {
      name: "Drenaj endodontic",
      price: "200",
    },
    {
      name: "Tratament rotativ monoradiculari",
      price: "200",
    },
    {
      name: "Tratament rotativ pluriradiculari",
      price: "200",
    },
    {
      name: "Îndepărtare pivot",
      price: "200",
    },
  ];

  return (
    <div className=" container flex  flex-col lg:flex-row justify-between">
      <div className=" lg:min-h-[632px] basis-full lg:basis-[40%] bg-primary space-y-5 xl:space-y-7 p-6 md:p-10">
        <h2 className=" text-4xl font-normal text-white">Ortodonție</h2>
        <p className=" text-sm sm:text-base font-normal text-white">
          Pentru a beneficia de aparat dentar, aveți nevoie în prealabil de un
          dosar ortodontic și un consult de specialitate.
        </p>
      </div>
      <div
        style={{ boxShadow: "0px 10px 40px 0px rgba(18, 18, 18, 0.10)" }}
        className=" bg-white basis-full pl-6 lg:basis-[60%] lg:pl-9 pr-7 py-14"
      >
        <ul className=" space-y-6">
          {OrthodonticsData.map((data, index) => (
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

export default Orthodontics;
