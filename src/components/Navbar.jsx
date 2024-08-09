"use client";
import { navData } from "@/app/data/NavData";
import { Menu, MoonStar, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className="fixed top-0 z-50 w-full py-2 shadow-md borde-b bg-zinc-900 text-slate-200 ">
      <div className="flex items-center justify-between max-w-6xl mx-auto md:px-3 ">
        <Link to="home" smooth={false} offset={-100} duration={700}>
          <div className="z-50 ml-5 text-2xl text-orange-600 cursor-pointer md:ml-3">
            Ireoluwa
          </div>
        </Link>
        <ul className="items-center hidden space-x-6 divide-orange-600 md:flex">
          {navData.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:decoration-orange-600 duration-500 ease-in-out transition  hover:underline hover:underline-offset-4 decoration-[3px] pt-1"
            >
              <Link to={item.name} smooth={false} offset={-125} duration={400}>
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link to="contact" smooth={false} offset={-100} duration={700}>
              <button className="px-3 py-2 mt-1 mr-3 font-semibold transition duration-500 ease-in-out bg-orange-600 rounded-md hover:bg-orange-700">
                Contact
              </button>
            </Link>
          </li>
        </ul>
        {/* mobile navbar */}
        <div className="flex items-center space-x-4 md:hidden">
          <ul className="z-50 mt-3">
            <li>
              <Link
                to="contact"
                onClick={() => setOpen(false)}
                smooth={false}
                offset={-100}
                duration={700}
              >
                <button className="px-3 py-2 font-semibold transition duration-500 ease-in-out bg-orange-600 rounded-md hover:bg-orange-700">
                  Contact
                </button>
              </Link>
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
                  : "absolute top-0 left-0 w-full min-h-screen bg-zinc-900 flex flex-col justify-center items-center "
              }
            >
              {navData.map((item, index) => (
                <li
                  key={index}
                  className="py-7 text-5xl cursor-pointer hover:decoration-orange-600 hover:underline hover:underline-offset-4 decoration-[3px]"
                >
                  <Link
                    to={item.name}
                    onClick={() => setOpen(false)}
                    smooth={false}
                    offset={-100}
                    duration={500}
                  >
                    {item.title}
                  </Link>
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
