import { FaDumbbell } from "react-icons/fa";

const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="flex flex-col items-center text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-[#ccff00]/10">
          <FaDumbbell className="animate-pulse text-3xl text-[#ccff00]" />
        </div>
        <h1 className="mt-6 text-2xl font-bold uppercase">Loading Workout</h1>
        <p className="mt-2 text-sm text-slate-400">
          Getting your training session ready...
        </p>
        <div className="mt-6 h-1.5 w-48 overflow-hidden rounded-full bg-base-300">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-[#ccff00]" />
        </div>
      </div>
    </main>
  );
};

export default Loading;
