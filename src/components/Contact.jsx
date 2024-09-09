import { ContactInfo } from "@/app/data/ConactInfo";
import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex flex-col items-center justify-center gap-4 px-4 mx-auto mt-20 md:h-[700px] max-w-7xl md:mb-0 md:px-10 text-slate-200 mb-10"
    >
      <div className="w-full">
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="150"
          data-aos-once="true"
          className="text-5xl font-bold underline lg:ml-16 md:text-6xl lg:text-7xl underline-offset-4 decoration-slate-200"
        >
          Contact
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
          data-aos-once="true"
          className="w-full max-w-3xl my-8 leading-normal lg:ml-16"
        >
          Have an Idea?
        </p>
      </div>
      <div className="lg:max-w-[1100px] w-full grid justify-center grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-7">
        {ContactInfo.map((item, index) => (
          <a
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="250"
            data-aos-once="true"
            key={index}
            href={item.link}
            target="_blank"
            className="text-sm font-semibold tracking-widest no-underline border-2 border-orange-600 rounded-lg"
          >
            <div className="overflow-hidden rounded-lg md:max-w-none ">
              <div className="p-4 duration-300 ease-in-out">
                <h1 className="my-1 text-xl font-medium tracking-widest text-white">
                  {item.form}
                </h1>
                <h2 className="text-sm font-semibold tracking-widest text-orange-600">
                  {item.line}
                </h2>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div
        className="mt-1 text-center "
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Copyright Ⓒ 2024 Goodness
      </div>
    </div>
  );
};

export default Contact;
