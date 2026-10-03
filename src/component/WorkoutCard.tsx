import Link from "next/link";
import { Workout } from "@/types";
import Image from "next/image";
import { FaFire, FaRegClock, FaStar } from "react-icons/fa";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-base-300 bg-base-200 transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff00] hover:shadow-xl"
    >
      {/* Workout Image */}
      <div className="">
        <Image
          src={workout.image}
          alt={workout.name}
          width={400}
          height={400}
          className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Difficulty Badge */}
        {/* <span className="absolute right-3 top-3 rounded-full bg-base-100/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
          {workout.difficulty}
        </span> */}
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Muscle Groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C2F800] px-3 py-1 text-sm font-bold text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h2 className="mb-2 text-2xl uppercase font-bold transition-colors duration-300 group-hover:text-[#ccff00]">
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="mb-4 text-slate-400">{workout.equipment}</p>

        {/* Stats */}
        <div className="flex gap-4 border-t border-slate-600 pt-4 text-center text-slate-400">
          <div className="flex items-center gap-1">
            <FaRegClock /> {workout.duration} min
          </div>
          <div className="flex items-center gap-1">
            <FaFire /> {workout.caloriesBurned} calories
          </div>
          <div className="flex items-center gap-1">
            <FaStar /> {workout.rating} rating
          </div>
        </div>
      </div>
    </Link>
  );
}
