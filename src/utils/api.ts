import { Workout } from "@/types";

export const getAllWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

export const getWorkoutById = async (id: number) => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  return res.json();
};
