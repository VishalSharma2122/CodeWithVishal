// components/Project.js
import React from "react";
import Card from "./Card";

const projects = [
  {
    title: "Job Portal",
    description:
      "A platform for students and companies to connect. Features job listings, applications, and role-based login.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRsl1bqkq3tg39ykaNKLaiA2qXqd1PaG1sw&s",
    link: "https://github.com/VishalSharma2122/jobPortal",
  },
  {
    title: "URL Shortener",
    description:
      "A simple and effective MERN stack project that shortens long URLs and tracks click analytics.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRsl1bqkq3tg39ykaNKLaiA2qXqd1PaG1sw&s",
    link: "https://github.com/VishalSharma2122/urlShortner",
  },
  {
    title: "LMS",
    description:
      "A fully responsive Learning Management System with course creation, quizzes, progress tracking, and real-time updates using React and Node.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRsl1bqkq3tg39ykaNKLaiA2qXqd1PaG1sw&s",
    link: "https://github.com/VishalSharma2122/LMS",
  },
];

function Project() {
  return (
    <>
      <div className="flex flex-col items-start p-8 min-h-screen bg-white overflow-x-hidden">
        <div className="h-screen w-full flex justify-center flex-col items-center">
          <div className="px-3 h-full flex justify-center flex-col items-center text-center">
            <h1 className="font-WorkSansRegular flex flex-col text-gray-500 text-3xl lg:text-6xl font-semibold leading-tight">
              <span>
                I have successfully
                <span className="px-2 text-pink-500 font-bold">
                  developed and deployed
                </span>
                full-stack web applications using the
              </span>
              <span>
                <span className="px-2 font-bold text-pink-500">MERN stack.</span>
              </span>
            </h1>
          </div>

          <svg
            width="50"
            height="20"
            viewBox="0 0 24 14"
            fill="none"
            className="mb-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L12 12L22 2"
              stroke="#000000"
              strokeWidth="2.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="px-4 py-10 min-h-screen bg-white ">
        <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
