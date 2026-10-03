import React from "react";
import Banner from "../assets/banner.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto my-12">
      <div className="hero bg-base-300 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={Banner} alt="" width={600} height={400} />
          <div>
            <h4>WORKOUT LIBRARY</h4>
            <h1 className="text-5xl font-bold">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className="py-6">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
              <br />
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <button className="btn btn-primary">Browse Workouts</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
