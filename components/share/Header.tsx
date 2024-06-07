import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MenubarItems from "./MenubarItem";
import Locked from "@/public/assets/images/locked.png";
import Logo from "@/public/assets/images/LogoEZ990.svg";
import { PropsWithChildren } from "react";
//import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between bg-neutral-700 text-white lg:h-20">
      <div
        id=""
        className="flex h-20 w-[100-vw] flex-row items-center justify-between bg-neutral-600 lg:w-[1300px] xl:w-[1500px] 2xl:w-[1800px]"
      >
        <Link href="/" className="ml-5">
          <div className="flex-row items-center justify-center gap-x-7 md:flex">
            <div className="relative h-16 w-20 hover:translate-x-2 hover:translate-y-2 hover:bg-slate-500">
              <Image src={Logo} sizes="100vw" fill alt="Logo 8zense.com" />
            </div>
            <h1 className="hidden text-slate-400 md:mr-6 md:block md:scale-125 md:text-lg md:hover:translate-x-2 md:hover:translate-y-2 md:hover:text-zenseCreme xl:text-xl">
              8zenSe.com
            </h1>
          </div>
        </Link>

        <SignedIn>
          <nav className="lg:flex lg:max-w-6xl lg:flex-row lg:items-baseline">
            <MenubarItems />
          </nav>
          <div className="mr-6 flex w-full flex-row items-center justify-between gap-x-5">
            <div className="relative hidden h-16 w-20">
              <Image src={Logo} sizes="100vw" fill alt="Logo 8zense.com" />
            </div>
            <UserButton afterSignOutUrl="/user" />
            <div className="text-5xl"></div>
          </div>
        </SignedIn>

        <SignedOut>
          <div className="flex w-full flex-row items-baseline justify-end gap-x-3">
            <div className="h-12 w-12 lg:h-8 lg:w-8">
              <Image
                src={Locked}
                alt="Schloss"
                sizes="100vw"
                className="-8 relative rounded-full border-0 border-gray-300"
              />
            </div>

            <Button
              asChild
              className="mr-9 rounded-xl bg-[#fcf601] text-3xl font-bold text-amber-500 hover:border-2 hover:border-[#fcf601] hover:bg-amber-400"
              size="lg"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </div>
        </SignedOut>
      </div>
    </header>
  );
};
export default Header;
