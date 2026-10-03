import Link from "next/link";
import { FaDumbbell } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#ccff00]/10">
          <FaDumbbell className="text-3xl text-[#ccff00]" />
        </div>
        <p className="mt-8 text-8xl font-black tracking-tight text-[#ccff00] sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold uppercase sm:text-4xl">
          Workout Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
          Looks like this page skipped leg day and disappeared. The workout or
          page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="btn mt-8 rounded-2xl bg-[#ccff00] px-8 text-black hover:bg-[#b8e600]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
