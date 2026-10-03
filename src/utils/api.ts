import { Workout } from "@/types";

export const getAllWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }
  return res.json();
};

export const getWorkoutById = async (id: number) => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch workout");
  }
  return res.json();
};
