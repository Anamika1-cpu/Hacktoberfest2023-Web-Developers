import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Tik-tok clone",
      description: "Having a functionality to upload the video",
      img: "https://image.cnbcfm.com/api/v1/image/106708352-16004447972020-09-17t163126z_6566204_rc2g0j9mb9gl_rtrmadp_0_usa-tiktok-china.jpeg?v=1663778360&w=1600&h=900",
      url: "https://arsal-tiktok-mern.netlify.app/",
    },
    {
      id: 2,
      title: "Task-Managemnt",
      description: "Having the functionality of add ,edit,delete,drag and drop feature",
      img: "https://www.slidegeeks.com/pics/dgm/l/p/Project_Management_Coaching_IT_Live_Class_Scheduling_And_Costing_Clipart_PDF_Slide_1-.jpg?w=1600&h=1500",
      url: "https://arsal-task-management.netlify.app/",
    },
    {
      id: 3,
      title: "To-Do",
      description: "Having the functionality of add , mark as done , delete feature",
      img: "https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/e40f2ed6-825e-4db8-9e78-d3f90d78333d.jpg?auto=format&q=50&h=900",
      url: "https://arsal-todo-tasks.netlify.app/",
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          Here are some of my projects using MERN stack
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item) => (
                <Link to={item.url} target="_blank" rel="noopener noreferrer">
                  <ProjectCard key={item.id} item={item} />
                </Link>
              ))
            : null}
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            atque porro quasi dolorum facere tempore maxime nemo quia nulla
            blanditiis doloribus, dolore, voluptas aspernatur harum facilis
            cumque magni soluta sapiente.
          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi.
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
