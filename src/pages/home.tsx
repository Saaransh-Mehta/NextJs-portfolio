'use client'
import React from 'react'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { FlipWords } from '@/components/ui/flip-words'

const home = () => {
  
    const words = ["better", "customizable", "beautiful", "modern"];
    return (

     <BackgroundBeamsWithCollision>
        <div className="h-[40rem] flex justify-center items-center px-4">
          <div className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
    
            
            
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            Build
            <FlipWords className=" text-purple-500 via-violet-500" words={words} /> <br />
            </div>
            websites with Saaransh Mehta
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
  )
}

export default home