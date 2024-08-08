import React from "react";

const Work = () => {
  return (
    <div
      name="work"
      className="container h-screen max-w-6xl px-8 mx-auto my-24 md:px-10 lg:px-4 text-slate-200"
    >
      <div className="flex w-full">
        <div
          className="text-5xl font-semibold underline md:text-5xl lg:text-6xl underline-offset-4 decoration-slate-200 decoration-[3px]"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="150"
          data-aos-once="true"
        >
          My Works
        </div>
      </div>
    </div>
  );
};

export default Work;
