"use client";

import { use, useEffect, useState } from "react";
import { usePlan } from "@/context/PlanContext";
import { getWorkoutById } from "@/utils/api";
import { Workout } from "@/types";
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

type Params = Promise<{ id: string }>;

const WorkoutDetails = ({ params }: { params: Params }) => {
  const { id } = use(params);

  const { plan, addToPlan, addToSaved } = usePlan();

  const [workout, setWorkout] = useState<Workout | null>(null);

  useEffect(() => {
    const loadWorkout = async () => {
      try {
        const data = await getWorkoutById(Number(id));
        setWorkout(data);
      } catch (error) {
        console.error("Failed to load workout:", error);
      }
    };

    loadWorkout();
  }, [id]);

  if (!workout) {
    return (
      <main className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Workout Not Found</h1>

          <p className="mt-2 text-base-content/60">
            We couldn&apos;t find the workout you&apos;re looking for.
          </p>
        </div>
      </main>
    );
  }

  const isPlanFull = plan.length >= 5;

  const isAlreadyInPlan = plan.some((item) => item.id === workout.id);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            height={1200}
            width={800}
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>

        <div className="w-full">
          <h1 className="text-3xl font-bold uppercase sm:text-4xl lg:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-4 leading-relaxed text-slate-400">
            {workout.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-sm font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-base-300 p-4 sm:p-6">
            <div className="flex justify-between gap-4">
              <span className="text-base-content/60">Equipment</span>

              <span className="text-right font-medium">
                {workout.equipment}
              </span>
            </div>

            <div className="divider my-2"></div>

            <div className="flex justify-between gap-4">
              <span className="text-base-content/60">Difficulty</span>

              <span className="font-medium">{workout.difficulty}</span>
            </div>

            <div className="divider my-2"></div>

            <div className="flex justify-between gap-4">
              <span className="text-base-content/60">Sets</span>

              <span className="font-medium">{workout.sets}</span>
            </div>

            <div className="divider my-2"></div>

            <div className="flex justify-between gap-4">
              <span className="text-base-content/60">Reps</span>

              <span className="font-medium">{workout.reps}</span>
            </div>

            <div className="divider my-2"></div>

            <div className="flex justify-between gap-4">
              <span className="text-base-content/60">Duration</span>

              <span className="font-medium">{workout.duration} min</span>
            </div>

            <div className="divider my-2"></div>

            <div className="flex justify-between gap-4">
              <span className="text-base-content/60">Calories</span>

              <span className="font-medium">{workout.caloriesBurned}</span>
            </div>

            <div className="divider my-2"></div>

            <div className="flex justify-between gap-4">
              <span className="text-base-content/60">Rating</span>

              <span className="font-medium">{workout.rating}</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">Instructions</h2>

            <ol className="mt-4 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3">
                  <span className="shrink-0">{index + 1}.</span>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => addToPlan(workout)}
              disabled={isPlanFull || isAlreadyInPlan}
              className="btn rounded-2xl bg-[#ccff00] text-black hover:bg-[#b8e600] disabled:bg-base-300 disabled:text-base-content/40"
            >
              <IoMdAdd />

              {isAlreadyInPlan
                ? "Already in Plan"
                : isPlanFull
                  ? "Plan Full"
                  : "Add to today's plan"}
            </button>

            <button
              onClick={() => addToSaved(workout)}
              className="btn rounded-2xl border border-base-300 bg-transparent hover:border-none hover:bg-[#ccff00] hover:text-black"
            >
              <FaRegBookmark />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;
