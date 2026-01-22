import React from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";


const Banner = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-[#26262B] py-20 font-sans text-white">
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-black shadow-xl">
          <img src="https://i.ibb.co.com/FkSGVCCp/azora-logo.png" alt="Setapp Logo" />
        </div>

        <h1 className="mb-6 max-w-2xl text-2xl md:text-5xl font-bold leading-tight md:text-6xl">
          Dozens of apps. <br /> One subscription. <br /> $9.99
        </h1>

        <div className="mb-6 flex items-center gap-4">
          <button className="rounded-lg bg-white px-8 py-3 font-semibold text-black transition-opacity hover:opacity-90">
            Try free for 7 days
          </button>
          <div className='flex gap-2 items-center'>
            <FaApple size={28} />
            <FcGoogle size={28} />
          </div>
        </div>

        <p className="max-w-xs text-sm text-gray-400">
          Power up your workflow with Setapp, a smart way to get apps.
        </p>
      </div>

      <div className="absolute left-10 top-20 hidden lg:block">
        <div className="relative">

          <div className="absolute -left-4 top-0 rotate-[-15deg] rounded-2xl bg-[#e69b73] px-6 py-4 text-center font-bold text-black shadow-lg">
            WORK <br /> WITH <br /> PICS
          </div>

          <div className="absolute left-20 top-32 flex h-24 w-24 rotate-[10deg] items-center justify-center rounded-full border-2 border-dashed border-gray-500 bg-[#ccd5d1] text-center text-[10px] font-bold text-black shadow-lg">
            VPN • AD BLOCKER • PDF
          </div>

          <div className="absolute -left-10 top-72 rotate-[-5deg] rounded-xl bg-[#98d8e6] px-8 py-3 font-bold text-[#1c6e80] shadow-lg">
            BOOST TEAMWORK
          </div>

          <div className="absolute left-12 top-96 rotate-[8deg] rounded-xl bg-[#e3e9e8] px-8 py-5 text-center font-bold text-[#3d5a5a] shadow-lg">
            STAY <br /> SECURE
          </div>
        </div>
      </div>

      <div className="absolute right-10 top-20 hidden lg:block">
        <div className="relative">

          <div className="absolute right-0 top-0 rotate-[12deg] rounded-2xl bg-[#ffcd94] px-10 py-4 font-bold text-[#8a5d2e] shadow-lg">
            FIX WIFI
          </div>

          <div className="absolute right-24 top-28 rotate-[-10deg] rounded-xl bg-[#a3d8f4] px-6 py-8 text-center font-bold text-[#3e6b8a] shadow-lg">
            PLAN <br /> YOUR <br /> DAY
          </div>

          <div className="absolute right-4 top-72 rotate-[5deg] rounded-3xl bg-[#f0a1b5] px-8 py-6 text-center font-bold text-[#8a3e52] shadow-lg">
            MANAGE <br /> YOUR MAC
          </div>

          <div className="absolute right-20 top-[400px] rotate-[-8deg] rounded-2xl bg-[#f4a261] px-10 py-8 text-center font-bold text-[#5c3d24] shadow-lg">
            CODE <br /> EASIER
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 bg-gray-800"></div>
    </section>
  );
};

export default Banner;