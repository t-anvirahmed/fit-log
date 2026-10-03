import Link from "next/link";
import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-center py-12">
        <Link href="./" className="flex items-center gap-2">
          <Image src={Logo} alt="fitlog logo"></Image>
          <h4 className={`${oswald.variable} text-xl font-bold`}>FITLOG</h4>
        </Link>
        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </section>
  );
};

export default Footer;
