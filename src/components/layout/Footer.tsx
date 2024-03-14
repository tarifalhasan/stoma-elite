import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" pb-10 pt-8 sm:pt-0 sm:pb-16 container flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
      <div className=" space-y-3 max-w-[400px] lg:max-w-[604px]">
        <h3 className=" text-lg  sm:text-xl font-bold">
          Dental <span className=" text-primary">Implant</span>
        </h3>
        <p className=" text-sm font-normal">
          Oferim tratament la standarde înalte pentru problemele existente și
          lucrăm cu fiecare pacient o strategie profilactică pentru a-și păstra
          cu încredere zâmbetul natural!
        </p>
      </div>
      <div className=" space-y-4">
        <h3 className=" text-lg  sm:text-xl font-bold">Social Media</h3>
        <ul className=" inline-flex items-center gap-4">
          <li>
            <Link
              className=" hover:text-skin-tiffany transition-all duration-500"
              href={"/"}
              target="_blank"
            >
              <FaFacebook size={24} />
            </Link>
          </li>
          <li>
            <Link
              className=" hover:text-skin-tiffany transition-all duration-500"
              href={"/"}
              target="_blank"
            >
              <FaInstagram size={24} />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
