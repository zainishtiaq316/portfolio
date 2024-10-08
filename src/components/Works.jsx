import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, view } from "../assets";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  view_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full mx-auto"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex flex-col items-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient mb-2 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            <div
              onClick={() => window.open(view_code_link, "_blank")}
              className="red-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={view}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div
  key={`${name}-${tag.name}`}
  className={`text-[14px] text-white px-2 py-1 rounded 
    ${tag.name === 'flutter' ? 'bg-blue-700' : tag.name === 'dart' ? 'bg-green-700' : tag.name === 'firebase' ?'bg-yellow-700' : tag.name === 'Api Integration' ?'bg-red-700': 'bg-gray-200'}`}
>
  {tag.name}
</div>

          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <h2 className="section__title">
        My <span>Projects</span>
      </h2>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
