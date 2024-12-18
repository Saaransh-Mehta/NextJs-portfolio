
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { CardHoverEffectDemo } from "@/components/ui/card-hover";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight";
import { StarsBackground } from "@/components/ui/stars-background";
import { Tab } from "@/components/ui/tabs-show";

import { div } from "framer-motion/client";

import Image from "next/image";
import Link from "next/link";


export default function Home() {

  const words = ["better", "customizable", "beautiful", "modern"];
  return (
    <div className="bg-black/[0.96]">
      <div>
    <BackgroundBeamsWithCollision>
      <div className="bg-black/[0.96] min-h-full w-full">
    <div className="h-[40rem] flex justify-center flex-col items-center px-4">
      <div className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
      <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">

        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
        Build
        <FlipWords className=" text-purple-500 via-violet-500" words={words} /> <br />
        </div>
        Web Apps with me with latest Technology
        </div>
      </div>
      <div className="flex mt-12">
        <Link href={"#hero-1"}>
        <button className="btn bg-gradient-to-r from-purple-500 via-violet-500">
    <span className="btn-text-one text-white text-lg font-mono">Let's Get Started</span>
    <span className="btn-text-two">Great!</span>
</button>
</Link>
      
</div>
    </div>
    
    </div>
  </BackgroundBeamsWithCollision>
  </div>
  <div id="hero-1" className="hero-section">
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
<div  className="section-2 flex flex-col bg-black/[0.96]">
<div className=" lg:flex lg:p-16 sm:flex sm:justify-center sm:items-center">
  <h1 className="flex justify-center text-3xl text-white">
    My Tech Stack
  </h1> 

</div>
<div>
<CardHoverEffectDemo/>
</div>
</div>
<div className="section-3 h-screen bg-black/[0.96]">
  <Tab/>
</div>
<div className="h-[100vh]">
<div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        <span>Shooting Star</span>
        <span className="text-white text-lg font-thin">x</span>
        <span>Star Background</span>
      </h2>
      <ShootingStars />
      <StarsBackground />
    </div>
</div>
  </div>
  );
}
