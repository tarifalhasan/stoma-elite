import Image from "next/image";

const Cabinet = () => {
  const data = [
    {
      name: "Cabinet 1",
      title: "Aparatura de ultima generatie",
      imgSrc: "/images/cabinet/1.webp",
    },
    {
      name: "Cabinet 2",
      title: "Aparatura de ultima generatie",
      imgSrc: "/images/cabinet/2.webp",
    },
    {
      name: "Cabinet 3",
      title: "Aparatura de ultima generatie",
      imgSrc: "/images/cabinet/3.webp",
    },
  ];
  return (
    <section className="  py-10 lg:py-14">
      <div className=" container space-y-2  text-center">
        <p className=" text-sm text-center font-bold uppercase text-primary">
          cabinete
        </p>
        <h3 className="text-2xl xl:text-3xl font-bold">
          Cabinete dotate la standarde europene
        </h3>
      </div>
      <div className=" container py-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div key={index + 2121212}>
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={392}
              height={460}
              className=" w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover"
            />
            <div
              style={{
                boxShadow: "0px 10px 40px 0px rgba(18, 18, 18, 0.10)",
              }}
              className=" bg-white flex flex-col items-center justify-center py-8 space-y-1"
            >
              <h3 className=" text-xl font-bold">Cabinet 2</h3>
              <p className=" text-xs font-normal text-skin-gray">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" pt-6  w-full flex flex-col gap-0 sm:flex-row">
        <div className=" sm:flex justify-end p-10 basis-[38%] bg-skin-tiffany h-[334px]">
          <p className=" text-base lg:text-xl font-bold max-w-[318px]">
            Ne mândrim cu deschiderea și onestitatea echipei noastre în toate
            etapele tratamentului, iar abordarea este una simplă:
          </p>
        </div>
        <div className=" p-12 basis-[62%] bg-primary px-6  flex items-center">
          <p className=" max-w-[742px] text-xl lg:text-3xl font-normal">
            Oferim tratament la standarde înalte pentru problemele existente și
            lucrăm cu fiecare pacient o strategie profilactică pentru a-și
            păstra cu încredere zâmbetul natural!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cabinet;
