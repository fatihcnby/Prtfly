import React from "react";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import instagram from "../assets/ins.png";
import linkedin from "../assets/linkedin.png";
import CV from "../assets/CV.pdf";
import hero from "../assets/hero3.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
      <div
        className="md:h-[420px] md:w-[340px] h-[660px] w-[580px] right-56 bg-gradient-to-r absolute rounded-full transform rotate-12 top-8"
        aria-hidden="true"
      ></div>
      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-gray-500 body-font z-10"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex space-x-4 md-2"
              aria-label="Social media links"
            >
              <a href="#" aria-label="facebook">
                <img
                  src={facebook}
                  alt=""
                  className="w-14 h-14 hover:scale-110 transition-transform"
                />
              </a>
              <a href="#" aria-label="facebook">
                <img
                  src={github}
                  alt=""
                  className="w-14 h-14 hover:scale-110 transition-transform"
                />
              </a>
              <a href="#" aria-label="facebook">
                <img
                  src={instagram}
                  alt=""
                  className="w-14 h-14 hover:scale-110 transition-transform"
                />
              </a>
              <a href="#" aria-label="facebook">
                <img
                  src={linkedin}
                  alt=""
                  className="w-13 h-13 hover:scale-110 transition-transform"
                />
              </a>
            </div>
            <h1 className="title-font sm:text-6xl text-4xl mb-4 font-bold text-gray-900">
              Merhaba... Ben <span className="text-green-900">Fatih</span>
            </h1>
            <h2 className="sm-text-3xl mb-4 font-bold text-blue-950">
              Frontend ve React Developer
            </h2>
            <p className="mb-8 leading-relaxed text-black max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              animi nobis aliquid, excepturi nulla, nam quas, fugiat asperiores
              est consequatur cum. Nobis nulla similique facilis.
            </p>
            <div className="flex justify-center">
              <a
                href={CV}
                download="CV_pdf"
                className="inline-flex text-white bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded-full text-lg hover:shadow-[0_0_20px_rgba(55,125,14,0.5)] transition-all"
              >
                CV Bilgilerim Burada !
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <img
              src={hero}
              alt=""
              className="object-cover object-center rounded-full border-4 w-110 h-110 border-green-700 shadow-xl hero_img"
              width={360}
              height={360}
              loading="eager"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
