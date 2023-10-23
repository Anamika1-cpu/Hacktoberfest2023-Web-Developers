import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles.css";

import img from "../assets/meter1.svg";
import bg from "../assets/banner-bg-7d41ca4d.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const Skills = () => {
  const skills = [
    { name: "Core Java", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React.js", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    // Add more skills as needed
  ];

  return (
    <section className="bg-[#171717] text-white py-10 style={{backgroundImage: `url(${bg})`}}">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded shadow-md hover:shadow-lg transition duration-300 flex-grow"
            >
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;