/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Hero = () => {
  return (
    <div
      name="home"
      className="flex items-center justify-between h-screen px-4 mx-auto mt-4 max-w-7xl md:mt-0 md:px-10 lg:px-20 bg-zinc-900"
    >
      <div className="flex flex-col justify-center h-full lg:mx-16">
        <p
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-duration="400"
          className="text-lg text-orange-600 md:text-md"
        >
          Hi, my name is,
        </p>
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="50"
          data-aos-once="true"
          className="py-1 text-5xl font-bold py md:text-6xl lg:text-7xl text-slate-200"
        >
          Ireoluwa.
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          data-aos-once="true"
          className="max-w-[1000px] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-300"
        >
          I build beautiful web experiences.
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="150"
          data-aos-once="true"
          className="text-orange-600 py-6 max-w-[600px] text-sm md:text-[15px]"
        >
          I'm a{" "}
          <span className="font-bold text-orange-600 text-md md:text-lg">
            Frontend Software Engineer
          </span>{" "}
          with a strong passion for crafting clean code and building efficient
          web applications with great user experiences.
        </p>
        <div className="flex justify-start w-full gap-4">
          <button
            className="flex items-center px-6 py-3 mt-0 space-x-3 font-semibold bg-orange-600 rounded-md md:mt-6 hover:bg-orange-700 text-slate-200"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-once="true"
          >
            My Work
          </button>
          <a
            href="https://drive.google.com/file/d/1gDYoNKtjGRdwjxOIVmKjrlaOpkS5JjTb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="250"
            data-aos-once="true"
            className="flex items-center px-6 py-3 mt-0 space-x-3 font-semibold no-underline bg-orange-600 rounded-md md:mt-6 hover:bg-orange-700 text-slate-200"
          >
            My Résumé
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
