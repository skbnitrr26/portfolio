import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 sm:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-full z-0" />

        {/* Experience Items */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative z-10 mb-24 flex flex-col sm:flex-row items-center ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Card */}
            <div
              className={`w-full sm:max-w-[500px] p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 transform transition-transform duration-300 ${
                index % 2 === 0 ? "sm:ml-auto sm:pr-10" : "sm:mr-auto sm:pl-10"
              }`}
            >
              {/* Company Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-md overflow-hidden shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">{experience.company}</h4>
                  <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400">{experience.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline Dot (Logo) */}
<div className="absolute left-1/2 -top-8 transform -translate-x-1/2 bg-gray-800 border-4 border-[#8245ec] w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex justify-center items-center z-20">
  <img
    src={experience.img}
    alt={experience.company}
    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
  />
</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
