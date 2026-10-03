"use client";

import { useEffect, useState } from "react";
import { Workout } from "@/types";
import { getAllWorkouts } from "@/utils/api";
import WorkoutCard from "./WorkoutCard";

const LibrarySection = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getAllWorkouts();
        setWorkouts(data);
      } catch (error) {
        console.error("Failed to load workouts:", error);
      }
    };

    loadData();
  }, []);

  return (
    <section id="library" className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">THE LIBRARY</h2>

        <p className="mt-2 text-base-content/60">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {workouts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <p className="text-slate-400">...</p>
        </div>
      )}
    </section>
  );
};

export default LibrarySection;
