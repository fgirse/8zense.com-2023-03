"use client";

"use client";

import { headerLinks } from "../../constants/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropDown from "./StaggereDropDown";
import DropDownHome from "./StaggereDropDownHome";
//import MobileNavi from"@/components/share/MobileNavi";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="mx-auto">
        <DropDownHome />
      </div>
      <ul className="md:flex-around flex w-full flex-col items-center justify-start md:flex-row md:justify-around">
        {headerLinks.map((link) => {
          const isActive = pathname === link.route;

          return (
            <>
              <li
                key={link.route}
                className={`${
                  isActive && "text-zenseGray"
                } flex-center whitespace-nowrap rounded-lg bg-zinc-700/5 p-2 px-1 py-1 text-left font-sans text-4xl font-black uppercase text-slate-200 hover:border-2 hover:bg-red-900 md:text-lg lg:mr-5 lg:text-2xl 2xl:text-3xl`}
              >
                <Link href={link.route}>{link.label}</Link>
              </li>
            </>
          );
        })}
      </ul>
      <div className="mx-auto text-xl">
        <DropDown />
      </div>
    </>
  );
};

export default NavItems;
