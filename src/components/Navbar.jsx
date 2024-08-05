"use client";
import { navData } from "@/app/data/NavData";
import { Menu, MoonStar, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className="fixed top-0 z-50 w-full py-5 borde-b bg-zinc-900 text-slate-200">
      <div className="container flex items-center justify-between max-w-6xl mx-auto">
        <div className="z-50 ml-3 text-2xl text-orange-600">Ireoluwa</div>
        <ul className="items-center hidden space-x-6 divide-orange-600 md:flex">
          {navData.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:decoration-orange-600 hover:underline hover:underline-offset-4 decoration-[3px]"
            >
              {item.title}
            </li>
          ))}
          <li>
            <button className="px-4 py-2 mr-3 font-semibold bg-orange-600 rounded-md hover:bg-orange-700">
              Contact
            </button>
          </li>
        </ul>
        {/* mobile navbar */}
        <div className="flex items-center space-x-4 md:hidden">
          <ul className="z-50">
            <li>
              <button className="px-5 py-2 font-semibold bg-orange-600 rounded-md hover:bg-orange-700">
                Contact
              </button>
            </li>
          </ul>
          <div onClick={handleClick} className="z-10">
            {!open ? <Menu className="z-10" /> : <X className="z-10" />}
          </div>
          <div className="">
            <ul
              className={
                !open
                  ? "hidden"
                  : "absolute top-0 left-0 w-full h-screen bg-zinc-900 flex flex-col justify-center items-center"
              }
            >
              {navData.map((item, index) => (
                <li
                  key={index}
                  className="py-6 text-4xl cursor-pointer hover:decoration-orange-600 hover:underline hover:underline-offset-4 decoration-[3px]"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
