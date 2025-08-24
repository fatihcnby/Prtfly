import React, { useState } from "react";
import portfolio from "../assets/project.png";
import portfolio1 from "../assets/project3.png";
import portfolio2 from "../assets/project.png";
import portfolio3 from "../assets/project3.png";
import portfolio4 from "../assets/project.png";
import portfolio5 from "../assets/project3.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nesciunt?",
    technologies: ["React", "NodeJs", "Html5", "TailwindCss"],
    github: "https://github.com/fatihcnby",
    demo: "",
    image: portfolio,
  },
  {
    id: 2,
    title: "E-Commerce",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nesciunt?",
    technologies: ["React", "NodeJs", "Html5", "TailwindCss"],
    github: "https://github.com/fatihcnby",
    demo: "",
    image: portfolio1,
  },
  {
    id: 3,
    title: "Portfolio",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nesciunt?",
    technologies: ["React", "NodeJs", "Html5", "TailwindCss"],
    github: "https://github.com/fatihcnby",
    demo: "",
    image: portfolio2,
  },
  {
    id: 4,
    title: "E-Commerce",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nesciunt?",
    technologies: ["React", "NodeJs", "Html5", "TailwindCss"],
    github: "https://github.com/fatihcnby",
    demo: "",
    image: portfolio3,
  },
  {
    id: 5,
    title: "Portfolio",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nesciunt?",
    technologies: ["React", "NodeJs", "Html5", "TailwindCss"],
    github: "https://github.com/fatihcnby",
    demo: "",
    image: portfolio4,
  },
  {
     id: 6,
    title: "E-Commerce",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, nesciunt?",
    technologies: ["React", "NodeJs", "Html5", "TailwindCss"],
    github: "https://github.com/fatihcnby",
    demo: "",
    image: portfolio5,
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - projectsPerPage : prevIndex - 1
    );
  };

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + projectsPerPage
  );

  return (
    <section
      id="projects"
      className="w-full py-20 px-4 sm:px-4 relative bg-green-950"
      data-aos="fade-up"
      data-aos-delay="250"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 group">
          <h2 className="text-3xl font-bold text-green-500 inline-block relative pb-2">
            YAPILAN PROJELER
            <span className="absolute bottom-0 left-0 h-1 bg-green-300 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            commodi.
          </p>
        </div>
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <FiChevronLeft className="text-green-700 text-xl" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
            onClick={nextSlide}
          >
            <FiChevronRight className="text-green-700 text-xl" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        className="px-3 py-1 bg-red-100 text-green-800 text-xs rounded-full"
                        key={index}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github} target="_blank"
                      className="flex items-center text-gray-700 hover:text-green-900 transition-colors"
                    >
                      <FaGithub className="mr-2" /> Code
                    </a>
                    <a
                      href={project.demo} target="_blank"
                      className="flex items-center text-gray-700 hover:text-green-900 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({
            length: Math.ceil(projects.length / projectsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * projectsPerPage)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index * projectsPerPage
                  ? "bg-green-600"
                  : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
