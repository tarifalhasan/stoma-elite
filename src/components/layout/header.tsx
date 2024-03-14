"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface MenuItem {
  label: string;

  href: string;
  id: number;
}

export const menuItems: MenuItem[] = [
  {
    label: "Despre noi",
    href: "/about",
    id: 1,
  },
  {
    label: "Prețuri",

    href: "/prices",
    id: 2,
  },
  {
    label: "Prețuri",
    href: "/about",
    id: 3,
  },
  {
    label: "contact",

    href: "/contacts",
    id: 4,
  },
];
const MainHeader = () => {
  const [header, setHeader] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        " hidden lg:flex py-5 z-50 h-[88px] items-center      sticky left-0 right-0 top-0",
        header ? "backdrop-blur-sm bg-white/[0.8] " : " bg-light-gray"
      )}
    >
      <div
        className={cn(
          "flex py-5 h-[88px] items-center container justify-between"
        )}
      >
        <div className="flex items-center lg:gap-x-20">
          <Link href={"/"}>
            <Image src={"logo.svg"} alt="ttg" width={166} height={52} />
          </Link>
          <ul className="inline-flex items-center gap-8">
            {menuItems.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href as string}
                  className="hover:text-primary transition-all duration-500 text-base lg:text-lg font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="inline-flex items-center gap-6">
          <Link href={"/"}>
            <Button variant={"link"} className="px-6  font-medium">
              Programează-te
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant={"outline"} className="px-6">
              0725 226 236
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
