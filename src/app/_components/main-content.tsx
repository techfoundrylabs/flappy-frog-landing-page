import Image from "next/image";
import Link from "next/link";

import FarcasterLogo from "@/assets/img/farcaster-white-logo.svg";
import FlappyFrogPoster from "@/assets/img/flappy-frog-poster.png";
import { MINI_APP_URL } from "@/config/constants";

export const MainCointent = () => {
  return (
    <main className="flex w-full flex-col gap-12 lg:flex-row lg:p-12">
      <div className="z-10 flex items-center justify-center lg:w-2/3">
        <Image
          src={FlappyFrogPoster}
          alt="Flappy Frog"
          className="h-[550px] w-[500px] rounded-2xl shadow-lg shadow-violet-500 lg:w-[450px]"
          priority={true}
        />
      </div>

      <div className="mt-12 flex w-full flex-col items-center justify-center gap-y-4 text-[#EA7B00]">
        <div className="hidden flex-col gap-y-2 lg:flex">
          <h1 className="text-center text-lg font-semibold lg:text-5xl">
            Welcome to
          </h1>
          <h1 className="text-center text-lg font-semibold lg:text-5xl">
            Flappy Frog
          </h1>
        </div>
        <p className="px-6 text-sm font-light text-white/80 lg:px-24 lg:text-center lg:text-[16px]">
          Guide our Froggy hero through a gauntlet of pipes, collecting points
          as you soar through the obstacles. Climb your way to the top of the
          leaderboard, challenge your friends, and prove your skill. The
          ultimate champion at the top of the leaderboard will claim the
          Treasury Pool, earning glory and rewards.
        </p>
        <Link
          href={MINI_APP_URL}
          target="_blank"
          className="my-4 w-64 self-center rounded-md bg-violet-600 p-2 text-sm text-white"
        >
          <div className="flex flex-row items-center gap-x-2">
            <Image src={FarcasterLogo} alt="" className={"w-8 lg:w-12"} />
            Start Playing
          </div>
        </Link>
      </div>
    </main>
  );
};
