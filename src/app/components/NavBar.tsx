"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVLINKS } from "../constants/constants";
import Image from "next/image";
import clsx from "clsx";

const NavBar = () => {
  const pathName = usePathname();
  return (
    <nav className="w-full flex flex-row justify-between md:p-4 bg-[--background] z-5">
      <Link
        className="flex items-start justify-between sticky left-3 "
        href={"/"}
      ><Image
         className="rounded-full shadow-circle mt-3"
         src="/coolcat.png"
         alt="Cool Cat"
         width={45}
         height={45}
      />
      </Link>
      <ul className="flex fixed sticky items-center  md:top-7 md:right-5 right-1">
        {NAVLINKS.map((navLink) => (
          <li key={navLink.href} className="block py-1 px-2 md:py-2 md:px-3">
            <Link
              className={clsx("relative text-sm md:text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center",
                {
                  'underline underline-offset-[5px] md:underline-offset-[8px] decoration-white decoration-4': pathName === navLink.href
                }
              )}
              href={navLink.href}
            >
              {navLink.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
