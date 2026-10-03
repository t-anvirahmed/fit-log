import React from "react";
import Banner from "../assets/banner.png";
import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section className="container mx-auto my-12">
      <div className="hero bg-base-300 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={Banner} alt="" width={600} height={400} />
          <div>
            <h1
              className={`${oswald.variable} text-6xl font-semibold tracking-tighter`}
            >
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className="py-6 text-gray-400">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
              <br />
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <button className="btn bg-[#ccff00] text-black uppercase font-bold">
              <a href="#library">Browse Workouts</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
