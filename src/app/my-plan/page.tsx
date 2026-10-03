"use client";

import Link from "next/link";
import { useState } from "react";
import { IoCheckmark, IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import Image from "next/image";
import { usePlan } from "@/context/PlanContext";

const MyPlanPage = () => {
  const { plan, saved, metrics, markAsDone, removeFromPlan, removeFromSaved } =
    usePlan();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState("duration");
  const currentList =
    activeTab === "plan" ? plan.filter((item) => !item.isDone) : saved;

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }
    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold uppercase sm:text-4xl">My Plan</h1>
        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-2xl bg-base-300 p-6 sm:grid-cols-3 sm:p-8">
        <div className="border-b border-slate-600 pb-4 sm:border-b-0 sm:border-r sm:pb-0">
          <p className="text-slate-400">Exercises</p>
          <h2 className="text-4xl font-bold text-[#ccff00]">
            {metrics.exercises}
          </h2>
        </div>

        <div className="border-b border-slate-600 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pl-6">
          <p className="text-slate-400">Minutes</p>
          <h2 className="text-4xl font-bold text-[#ccff00]">
            {metrics.minutes}
          </h2>
        </div>
        <div className="sm:pl-6">
          <p className="text-slate-400">Calories</p>
          <h2 className="text-4xl font-bold text-[#ccff00]">
            {metrics.calories}
          </h2>
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-between gap-4 border-b border-base-300 pb-4 sm:flex-row sm:items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              activeTab === "plan"
                ? "bg-[#ccff00] text-black"
                : "text-slate-400 hover:bg-base-300"
            }`}
          >
            Today&apos;s Plan
            <span className="ml-2">{plan.length}</span>
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              activeTab === "saved"
                ? "bg-[#ccff00] text-black"
                : "text-slate-400 hover:bg-base-300"
            }`}
          >
            Saved
            <span className="ml-2">{saved.length}</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <label
            htmlFor="sort"
            className="whitespace-nowrap text-sm text-slate-400"
          >
            Sort By
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="select rounded-xl border-base-300 bg-base-200 shadow-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {sortedList.length === 0 ? (
          <div className="flex min-h-87.5 flex-col items-center justify-center rounded-2xl border border-dashed border-base-300 px-6 text-center">
            <h2 className="text-2xl font-bold uppercase">Nothing Here Yet</h2>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="btn mt-6 rounded-2xl bg-[#ccff00] text-black hover:bg-[#b8e600]"
            >
              Browse Workouts
            </Link>
          </div>
        ) : (
          sortedList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5 rounded-2xl border border-base-300 bg-base-200 p-4 transition hover:border-[#ccff00]/40 sm:p-5 lg:flex-row lg:items-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={200}
                className="h-48 w-full rounded-xl object-cover sm:h-56 lg:h-28 lg:w-40"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap gap-2">
                  {item.muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-[#ccff00]/10 px-2.5 py-1 text-xs font-semibold text-[#ccff00]"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>
                <h2 className="mt-2 truncate text-xl font-bold">{item.name}</h2>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-400">
                  <span>{item.duration} min</span>
                  <span>{item.caloriesBurned} kcal</span>
                  <span>★ {item.rating}</span>
                  <span>{item.difficulty}</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href={`/workout/${item.id}`}
                  className="btn btn-sm w-full rounded-xl border-base-300 bg-transparent hover:border-[#ccff00] hover:bg-[#ccff00] hover:text-black sm:w-auto"
                >
                  <IoEyeOutline className="text-lg" />
                  View Details
                </Link>
                {activeTab === "plan" && (
                  <button
                    onClick={() => markAsDone(item.id)}
                    className="btn btn-sm w-full rounded-xl bg-[#ccff00] text-black hover:bg-[#b8e600] sm:w-auto"
                  >
                    <IoCheckmark className="text-lg" />
                    Mark as Done
                  </button>
                )}
                <button
                  onClick={() =>
                    activeTab === "plan"
                      ? removeFromPlan(item.id)
                      : removeFromSaved(item.id)
                  }
                  className="btn btn-sm rounded-xl border border-base-300 bg-transparent hover:border-red-500 hover:bg-red-500 hover:text-white"
                >
                  <MdDeleteOutline className="text-lg" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};
export default MyPlanPage;
