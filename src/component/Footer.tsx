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
    <section className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-between gap-4 py-10 text-center sm:flex-row sm:text-left">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="FitLog logo" />

          <h4 className={`${oswald.variable} text-xl font-bold`}>FITLOG</h4>
        </Link>

        <p className="text-xs text-slate-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </section>
  );
};

export default Footer;
