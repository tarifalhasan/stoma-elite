"use client";
import { AlignJustify } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menuItems } from "./header";

const MobileHeader = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
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
  });
  return (
    <header
      className={cn(
        "flex lg:hidden z-50 py-2 border-b bg-background   items-center  sticky left-0 right-0 top-0"
      )}
    >
      <div className=" w-full">
        <div
          className={cn("flex py-5  items-center container justify-between")}
        >
          <div className="flex items-center gap-x-6">
            <div>
              {nav ? (
                <X
                  onClick={() => setNav((prev) => !prev)}
                  className=" w-6  h-6 block"
                />
              ) : (
                <AlignJustify
                  onClick={() => setNav((prev) => !prev)}
                  className=" w-6  h-6 block"
                />
              )}
            </div>
            <div>
              <a href={"/"}>
                <Image src={"/logo.svg"} alt="ttg" width={166} height={52} />
              </a>
            </div>
          </div>
          <Link href={"/en/order"} className="  inline-flex items-center gap-6">
            <Button size={"lg"} className="rounded-full">
              <Phone className=" w-6 h-6" />
            </Button>
          </Link>
        </div>
        {nav && (
          <ul className="  pb-5 flex flex-col justify-center items-center gap-1">
            {menuItems?.map((l, index) => (
              <li className=" block" onClick={() => setNav(false)} key={index}>
                <Link
                  href={l.href as string}
                  className={cn(
                    "hover:text-primary transition-all duration-500 text-base lg:text-lg font-medium",
                    pathName === l.href
                      ? "text-primary font-bold"
                      : " font-medium"
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <div className="flex flex-col  justify-center items-center gap-2">
              <Link href={"/"}>
                <Button variant={"outline"} className="px-6">
                  0725 226 236
                </Button>
              </Link>
            </div>
          </ul>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
