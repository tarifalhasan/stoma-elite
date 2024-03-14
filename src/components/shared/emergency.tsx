const Emergency = () => {
  return (
    <section className=" items-center py-10 xl:py-14 container grid gap-9 xl:grid-cols-2">
      <div
        className=" h-[200px] sm:h-[280px] "
        style={{
          backgroundImage: `url('/images/emerjengy-mask.webp')`,
          backgroundSize: "100% 100%",
        }}
      ></div>
      <div className=" space-y-5 lg:space-y-7">
        <div className=" space-y-1">
          <p className=" text-sm font-bold text-primary">URGENȚE</p>
          <p className=" text-2xl xl:text-3xl font-bold">
            Urgențe stomatologice fara programare
          </p>
        </div>
        <p className=" text-base font-medium text-skin-gray">
          Ne dorim să evităm intervențiile de urgență și anxietatea asociată
          deseori, așadar punem accent pe rolul jucat în prevenirea și
          eliminarea posibilelor probleme din fașă. Cu toate acestea, în
          situații ce necesită intervenție imediată, suntem pregătiți pentru a
          răspunde de urgență nevoilor tale!
        </p>
        <ul className=" space-y-[4px]">
          <li className="flex items-center gap-3">
            <span className=" w-4 h-4 rounded-full bg-primary"></span>
            <span className=" text-base font-bold">
              Tariful tratamentului de urgență este de 150 RON
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className=" w-4 h-4 rounded-full bg-primary"></span>
            <span className=" text-base font-bold">
              Urgențele nu au nevoie de programare!
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Emergency;
