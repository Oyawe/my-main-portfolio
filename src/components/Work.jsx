import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { ProjectData } from "@/app/data/ProjectData";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Work = () => {
  return (
    <div
      name="projects"
      className="px-4 mx-auto my-0 md:h-full max-w-7xl md:px-10 lg:px-20 text-slate-200 bg-zinc-900"
    >
      <div className="flex flex-col w-full lg:mx-14 md:mx-0 ">
        <div
          className="text-5xl font-semibold underline md:text-5xl lg:text-6xl underline-offset-4 ml-2 decoration-slate-200 decoration-[3px]"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="150"
          data-aos-once="true"
        >
          Projects
        </div>
        <div className="grid justify-center grid-cols-1 gap-5 my-20 mt-10 md:px-0 lg:px-4 lg:mr-24 sm:grid-cols-2">
          {ProjectData.map((project, index) => (
            <CCard
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={project.delay}
              data-aos-once="true"
              key={index}
              className="overflow-hidden border shadow-lg border-zinc-200 shadow-gray-200 bg-zinc-900"
            >
              <a href={project.link} target="_blank">
                <LazyLoadImage
                  orientation="top"
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition duration-500 transform hover:scale-105 hover:opacity-60"
                />
              </a>
              <CCardBody className="text-white bg-zinc-900">
                <CCardTitle className="mb-3 font-bold">
                  {project.title}
                </CCardTitle>
                <CCardText className="text-sm">{project.description}</CCardText>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies?.map((tag) => (
                      <div
                        className="text-[10px] sm:text-sm px-1 py-1 rounded-lg bg-zinc-700"
                        key={tag}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <CButton
                    style={{ backgroundColor: "#fff", padding: 1 }}
                    size="sm"
                    href={project.link}
                    target="_blank"
                  >
                    <div className="flex items-center bg-transparent">
                      {project.linkIcon}
                      <span className="bg-transparent text-slate-900">
                        Website
                      </span>
                    </div>
                  </CButton>
                  <CButton
                    style={{ backgroundColor: "#fff", padding: 1 }}
                    size="sm"
                    href={project.github}
                    target="_blank"
                  >
                    <div className="flex items-center bg-transparent">
                      {project.githubIcon}
                      <span className="bg-transparent text-slate-900">
                        Source
                      </span>
                    </div>
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
