import { ServiceDummyData } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Services = ({ className }: { className?: string }) => {
  return (
    <section className={cn(className, "bg-opacity-20  py-14 xl:py-16")}>
      <div className=" container space-y-2  text-center">
        <p className=" text-sm text-center font-bold uppercase text-primary">
          Medici
        </p>
        <h3 className="text-2xl xl:text-3xl font-bold">
          Specialiștii din clinica noastră
        </h3>
      </div>
      <div className=" grid  sm:grid-cols-3 xl:grid-cols-4 gap-8 container pt-10">
        {ServiceDummyData.map((item, i) => (
          <Link
            href={`/services/${item.id}`}
            key={i}
            style={{
              boxShadow: "0px 10px 40px 0px rgba(18, 18, 18, 0.10)",
            }}
            className=" bg-white space-y-2 border-t-[3px] border-primary px-7 py-8"
          >
            <h4 className=" text-xl font-bold">{item.name}</h4>
            <p className="s text-base font-medium">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
