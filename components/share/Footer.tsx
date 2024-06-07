import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Logo02 from "@/public/assets/images/LogoEZ40.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
//import ScrollToTop from "../BackToTop/ScrollToTop"

export default function FooterDemo() {
  return (
    <footer className="mt-auto w-full bg-neutral-600">
      <div className="mx-auto flex flex-col flex-wrap px-4 py-16 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <Link href={"/"} className="text-2xl text-white">
            8zense.com
          </Link>

          <div className="mt-4 flex">
            <Input type="email" placeholder="Email" />
            <Button className="bg-zenseSignal2" variant="default">
              sende e-mail
            </Button>
          </div>
          <div className="mt-4 flex justify-center space-x-4 lg:mt-2">
            <Link href={""}>
              <Facebook className="text-blue-500" />
            </Link>
            <Link href={""}>
              <Twitter className="text-sky-300" />
            </Link>
            <Link href={""}>
              <Instagram className="text-pink-500" />
            </Link>
            <Link href={""}>
              <Linkedin className="text-blue-400" />
            </Link>
          </div>
        </div>
        <div className="mt-4 w-full justify-between text-center lg:flex">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="mb-2 font-bold tracking-widest text-gray-100">
              Quick Links
            </h2>
            <ul className="mb-8 list-none space-y-2 text-sm">
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 1
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 2
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 3
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="mb-2 font-bold tracking-widest text-gray-100">
              Quick Links
            </h2>
            <ul className="mb-8 list-none space-y-2 text-sm">
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 1
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 2
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 3
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <h2 className="mb-2 font-bold tracking-widest text-gray-100">
              Quick Links
            </h2>
            <ul className="mb-8 list-none space-y-2 text-sm">
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 1
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 2
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 3
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300">
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright mt-1 text-center text-[1rem] font-medium text-zinc-100">
        Copyright © {new Date().getFullYear()}. All rights by{" "}
        {/*} <a
            href="https://web3templates.com/"
            target="_blank"
            rel="noopener">
            Web3Templates.
              </a>{" "}*/}
        <span className="font-black text-amber-300">MEDICUS DESIGN </span>
        <a href="https://www.glazestock.com/" target="_blank" rel="noopener ">
          4058 Basel🇨🇭
        </a>
      </div>
    </footer>
  );
}
