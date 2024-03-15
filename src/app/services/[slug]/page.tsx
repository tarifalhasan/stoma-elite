import PriceCard from "@/components/shared/PriceCard";
import { ServiceDummyData } from "@/data";
import Image from "next/image";

const ServicesDetails = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const data = ServiceDummyData.find((i) => i.id.toString() === params.slug);
  console.log(data);
  return (
    <div className=" container">
      <div className=" py-10 flex flex-col lg:flex-row  lg:items-center gap-10">
        <div className=" basis-full  space-y-3 lg:basis-1/2">
          <h4 className=" text-4xl xl:text-5xl font-bold">{data?.name}</h4>
          <p className=" text-base font-medium text-skin-gray max-w-[490px]">
            {data?.description}
          </p>
        </div>
        <div className=" basis-full lg:basis-1/2 ">
          <div className=" h-[185px] md:h-[260px]">
            {data?.featureImage && (
              <Image
                className=" w-full h-full object-cover"
                src={data?.featureImage}
                alt={data.name}
                width={604}
                height={206}
              />
            )}
          </div>
        </div>
      </div>
      <div className=" pt-7 lg:items-start flex flex-col  lg:flex-row xl:flex-nowrap flex-wrap gap-8 justify-between ">
        {data?.fetures.map((fe, i) => (
          <div
            key={i}
            style={{
              boxShadow: "0px 10px 40px 0px rgba(18, 18, 18, 0.10)",
            }}
            className=" flex-grow basis-[calc(33%)] bg-white space-y-2 border-t-[3px] border-primary px-7 py-8"
          >
            <h4 className=" text-xl font-bold">{fe.name}</h4>
            <p className="s text-base text-skin-gray font-medium">
              {fe.description}
            </p>
          </div>
        ))}
      </div>
      <div className=" py-10 lg:py-16  xl:px-16">
        <PriceCard title="Listă prețuri" prices={data?.priceList} />
      </div>
    </div>
  );
};

export default ServicesDetails;
