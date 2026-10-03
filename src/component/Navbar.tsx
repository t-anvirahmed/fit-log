"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Oswald } from "next/font/google";

import Logo from "../assets/logo.png";
import { usePlan } from "@/context/PlanContext";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const navLinks = (
    <>
      <li>
        <Link
          href="/workouts"
          className={
            pathname === "/workouts"
              ? "text-[#ccff00] bg-[#1A2312] rounded-2xl font-semibold"
              : "text-gray-400"
          }
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className={
            pathname === "/my-plan"
              ? "text-[#ccff00] bg-[#1A2312] rounded-2xl font-semibold"
              : "text-gray-400"
          }
        >
          My Plans
        </Link>
      </li>
    </>
  );

  return (
    <div className="border-b border-base-100">
      <section className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <Link href="/" className="flex items-center gap-2">
              <Image src={Logo} alt="Fitlog logo" />
              <h4 className={`${oswald.variable} text-3xl font-bold`}>
                FITLOG
              </h4>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end flex gap-4">
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <span>Plan</span>
              <span className="flex size-6 items-center justify-center rounded-full bg-[#ccff00] font-bold text-black">
                {plan.length}
              </span>
            </Link>
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <span>Saved</span>
              <span className="flex size-6 items-center justify-center rounded-full border font-bold">
                {saved.length}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
