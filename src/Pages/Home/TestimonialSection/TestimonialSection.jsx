import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="relative w-full mt-44">
      <div className="h-40 bg-[#1c1c1f]"></div>

      <div className="h-60 bg-white"></div>

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="relative w-[1355px] overflow-hidden rounded-[2.5rem] bg-[#765070] shadow-2xl">
          
          <div className="flex flex-col md:flex-row">
            
            <div className="flex flex-1 flex-col justify-center p-10 lg:p-16">
              <blockquote className="mb-6 text-xl font-medium leading-relaxed text-white md:text-2xl">
                "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play."
              </blockquote>
              <cite className="not-italic text-sm font-semibold tracking-wide text-white/70 uppercase">
                Jason Toombs
              </cite>

              <div className="mt-10">
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform hover:scale-105">
                  <Play fill="currentColor" size={24} className="ml-1" />
                </button>
              </div>
            </div>

            <div className="relative flex-1">
              <img 
                src="https://i.ibb.co.com/5hmKhtXF/21a6be253fb14ba0748b3310c64b39b8ff20bbf9.png" 
                alt="Jason" 
                className="h-full w-full object-cover grayscale-[20%]"
              />
              
              <div className="absolute right-6 top-6 flex gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40">
                  <ChevronLeft size={20} />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2">
        <span className="h-2 w-2 rounded-full bg-gray-800"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
      </div>
    </section>
  );
};

export default TestimonialSection;