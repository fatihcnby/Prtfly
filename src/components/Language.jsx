import React from "react";

const languages = [
  {
    name: "Turkish",
    level: "Native",
    proficiency: 100,
  },
  {
    name: "English",
    level: "İntermediate",
    proficiency: 70,
  },
  {
    name: "Deutsch",
    level: "İntermediate",
    proficiency: 70,
  },
];
const Language = () => {
  return (
    <section
      id="languages"
      className="w-full py-16 px-4 sm:px-8 bg-white"
      data-aos="fade-up"
      data-aos-delay="250"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 group">
          <h2 className="text-4xl font-bold text-green-900 inline-block relative pb-2">
            YABANCI DİLLER
            <span className="absolute bottom-0 left-0 h-1 bg-green-600 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
            ipsum!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((lang, idx) => (
            <div
              className="bg-gray-50 p-6 rounded-xl shadow-md transition-shadow"
              key={idx}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {lang.name}
                </h3>
                <span className="text-sm font-medium text-green-700">
                  {lang.level}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: `${lang.proficiency}%` }}
                ></div>
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-xs text-gray-500">
                  {lang.proficiency}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Language;
