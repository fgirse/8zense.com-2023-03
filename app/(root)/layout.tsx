import Footer from "@/components/share/Footer";

import Header from "@/components/share/Header";

import ScrollToTop from "@/components/BackToTop/ScrollToTop";

import Newsletter from "@/components/share/Newsletter";

import styles from "./styles.module.css";
import { HeadManagerContext } from "next/dist/shared/lib/head-manager-context.shared-runtime";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "8zenSe.com",
  description:
    "LandingPage for startup, Interiore Design, Innenarchitektur, Desing Beton-MÃ¶bel ",
  icons: { icon: "/assets/images/LogoEZ990.svg" },
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    

    <Header />

<main className={styles.main}>{children}</main>

<ScrollToTop />

<Newsletter />

<Footer />

    
    </>
  );
}
