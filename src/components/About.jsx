import { AboutData, AboutIcons } from "@/app/data/AboutData";
import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="flex flex-col items-center justify-center gap-4 px-4 mx-auto my-0 md:h-[700px] max-w-7xl lg:mt-0 text-slate-200 md:flex-row"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="150"
        data-aos-once="true"
      >
        <h1 className="text-5xl font-bold underline md:text-6xl lg:text-7xl underline-offset-4 decoration-slate-200">
          About
        </h1>
        {AboutData.map((item, index) => (
          <div key={index}>
            <p className={"w-full max-w-3xl mx-auto my-8 leading-normal"}>
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
      <div
        className="lg:mt-2 flex items-center justify-center gap-5 flex-wrap max-w-[300px]"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
        data-aos-once="true"
      >
        {AboutIcons.map((item, index) => (
          <div
            className="relative flex flex-col items-center transition-all duration-500 ease-in group "
            key={index}
          >
            <img
              src={item.image}
              className={`${
                item.className === "true"
                  ? `w-[61px] h-14 transition-opacity duration-500 ease-in-out hover:opacity-60`
                  : "w-14 h-14 transition-opacity duration-500 ease-in-out hover:opacity-60"
              } `}
              alt=""
            />
            <span className="absolute text-sm transition-all duration-500 ease-in-out transform scale-0 -bottom-8 group-hover:scale-110">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
