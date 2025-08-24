import React from "react";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import bootstrap from "../assets/bootstrap.png";
import typescript from "../assets/typescript.png";
import nextjs from "../assets/nextjs.png";

const skills = [
  {
    img: html,
    name: "Html",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, officiis! ",
  },
  {
    img: react,
    name: "React",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, officiis! ",
  },
  {
    img: javascript,
    name: "Javascript",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, officiis! ",
  },
  {
    img: tailwind,
    name: "Tailwind",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, officiis! ",
  },
  {
    img: css,
    name: "Css",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, officiis! ",
  },
  {
    img: bootstrap,
    name: "Bootstrap",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, officiis! ",
  },
  {
    img: typescript,
    name: "Typescript",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, officiis! ",
  },
  {
    img: nextjs,
    name: "Nextjs",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, officiis! ",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-16 bg-gradient-to-b from-gray-200/10 to-white relative"
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 group">
          <h2 className="text-4xl font-bold text-green-900 inline-block relative pb-2">
            YETENEKLER
            <span className="absolute bottom-0 left-0 h-1 bg-green-600 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Teknolojiler
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skills, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl border border-white/20 tracking-all duration-300 group relative overflow-hidden hover:bg-white/90 hover:border-green-200 hover:scale-[1.03]"
            >
              <div className="absolute indent-0 bg-gradient-to-br from-red-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="mb-4 p-3 bg-white/80 rounded-xl shadow-sm group-hover:rotate-6 group-hover:bg-green-100 transition-all duration-300">
                <img
                  src={skills.img}
                  alt={`${skills.name} Icon`}
                  className="w-14 h-14 object-contain grayscale-[%20] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-200">
                {skills.name}
              </h3>
              <p className="text-sm text-gray-600 text-center group-hover:text-gray-800 group-hover:scale-[1.03] transition-all duration-200 px-2">
                {skills.desc}
              </p>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-300/30 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
