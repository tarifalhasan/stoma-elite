const Services = () => {
  const Data = [
    {
      name: "Endodonție",
      description: "Obturatii de canal sau extirpari a nervilor.",
      id: 1,
    },
    {
      name: "Implantologie",
      description:
        "Implanturi dentare prin metode minim invazive de chirurgie ghidată.",
      id: 2,
    },
    {
      name: "Terapie",
      description: "Tratamente stomatologice cu anestezie generală.",
      id: 3,
    },
    {
      name: "Protetică fixă",
      description:
        'Protezări pe implanturi prin metoda "All on 4" sau "All on 6"',
      id: 4,
    },
    {
      name: "Ortodonție",
      description: "Aplicam aparate dentare ortodontice fixe si mobile.",
      id: 5,
    },
    {
      name: "Protetică mobilă",
      description:
        'Protezări imediate pe implanturi prin metoda "One day Implant"',
      id: 6,
    },
    {
      name: "Chirurgie",
      description:
        "Diferite interventii de extractie, gingivectomie sau decapusonare",
      id: 7,
    },
    {
      name: "Profilaxie",
      description:
        "Oferim servicii de estetică dentară realizând albiri dentare cu lampa UV.",
      id: 8,
    },
  ];
  return (
    <section className="   bg-skin-tiffany bg-opacity-20  py-14 xl:py-16">
      <div className=" container space-y-2  text-center">
        <p className=" text-sm text-center font-bold uppercase text-primary">
          Medici
        </p>
        <h3 className="text-2xl xl:text-3xl font-bold">
          Specialiștii din clinica noastră
        </h3>
      </div>
      <div className=" grid  sm:grid-cols-3 xl:grid-cols-4 gap-8 container pt-10">
        {Data.map((item, i) => (
          <div
            key={i}
            style={{
              boxShadow: "0px 10px 40px 0px rgba(18, 18, 18, 0.10)",
            }}
            className=" bg-white space-y-2 border-t-[3px] border-primary px-7 py-8"
          >
            <h4 className=" text-xl font-bold">{item.name}</h4>
            <p className="s text-base font-medium">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
