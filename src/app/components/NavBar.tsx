"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVLINKS } from "../constants/constants";
import Image from "next/image";
import clsx from "clsx";

const NavBar = () => {
  const pathName = usePathname();
  return (
    <nav className="w-full flex flex-row items-center justify-end md:p-4">
      <Link
        className="fixed justify-start left-5 top-5 shadow-circle rounded-full"
        href={"/"}
      ><Image
        className="rounded-lg"
         src="/coolcat.png"
         alt="Cool Cat"
         width={45}
         height={45}
      />
      </Link>
      <ul className="flex flex-row fixed top-5 md:right-5 right-1">
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
