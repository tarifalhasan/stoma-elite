import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Medici = () => {
  const doctores_data = [
    {
      profileImage: "/images/doctors/1.png",
      name: "Dr. Alex Olaru",
      role: "medic stomatolog",
    },
    {
      profileImage: "/images/doctors/2.png",
      name: "Dr. Pascariu Caleb",
      role: "medic stomatolog",
    },
    {
      profileImage: "/images/doctors/3.png",
      name: "Dr. Alex Olaru",
      role: "Dr. Camelia Vidroiu",
    },
  ];
  return (
    <section className=" my-6 container py-14 xl:py-16">
      <div className=" space-y-2  text-center">
        <p className=" text-sm text-center font-bold uppercase text-primary">
          Medici
        </p>
        <h3 className="text-2xl xl:text-3xl font-bold">
          Specialiștii din clinica noastră
        </h3>
      </div>
      <div className=" pt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctores_data.map((item, index) => (
          <div
            key={index}
            className="rounded-[8px]   flex flex-col items-center justify-center py-14 space-y-5"
            style={{
              backgroundColor: "#fff",
              boxShadow: "0px 10px 40px 0px rgba(18, 18, 18, 0.10)",
            }}
          >
            <Avatar className=" w-28 h-28">
              <AvatarImage src={item.profileImage} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className=" space-y-1">
              <h3 className=" text-center text-xl font-bold">{item.name}</h3>
              <p className=" text-center text-base text-skin-gray font-medium">
                {item.role}
              </p>
            </div>
            <Link href={"/"}>
              <Button className=" h-auto py-1" variant={"outline"}>
                Programează-te
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Medici;
