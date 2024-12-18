
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FlipWords } from "@/components/ui/flip-words";
import { Spotlight } from "@/components/ui/spotlight";
import { div } from "framer-motion/client";

import Image from "next/image";

export default function Home() {
  const words = ["better", "customizable", "beautiful", "modern"];
  return (
    <div className="">
    <BackgroundBeamsWithCollision>
      <div className="bg-black/[0.96] w-full">
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
      <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">

        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
        Build
        <FlipWords className=" text-purple-500 via-violet-500" words={words} /> <br />
        </div>
        websites with Saaransh Mehta
        </div>
      </div>
    </div>
    </div>
  </BackgroundBeamsWithCollision>
  <div className="hero-section">
  <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          About Me
        </h1>
        <p className="mt-20 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Hello, I'm Saaransh, a passionate and versatile Full-Stack Developer with a strong command of both frontend and backend technologies. I specialize in building high-performance, scalable, and intuitive web applications that provide seamless user experiences.
        
        </p>
      </div>
    </div>
  </div>
  </div>
  );
}
