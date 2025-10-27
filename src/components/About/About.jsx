import React from "react";

import { Typewriter } from "react-simple-typewriter";

import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/sam.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            <i>Hi</i>, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sumit Kumar
          </h2>
          {/* Skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Fullstack Developer",
                "Java Developer",
                "Web Developer",
                "Coder",
              ]}
              loop={0}
              cursor
              cursorStyle="⚡"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            ></Typewriter>
          </h3>

          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm a passionate beginner Java developer focused on{" "}
            <b>object-oriented programming, data structures, and algorithms</b>
            .I'm currently learning <b>Spring and Spring Boot</b> to build web
            applications, aiming to become a proficient developer and contribute
            effectively to a team.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1mjjSszJVkDd_lLPuCUv42tjv74D4F_Wr/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/1 flex justify-center md:justify-end md:mr-2">
          <Tilt
            className="w-52 h-52 sm:w-72 sm:h-72 md:w-[26rem] md:h-[26rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Sumit Kumar Barnwal"
              className="w-full h-full object-cover drop-shadow-[0_10px_20px_rgba(130, 69, 236, 0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
