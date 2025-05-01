import React from "react";
import {
  Code,
  Database,
  Server,
  Brush,
} from "lucide-react";

// Define skill structure
const skillCategories = [
  {
    title: "Frontend Development",
    icon: Brush,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React js",
      "Tailwind CSS",
      "Shadcn UI",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "SQl(Basic)"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB",  "MySQL (Basic)","PostgreSQL",],
  },
  {
    title: "Tools & Technologies",
    icon: Code,
    skills: ["Git & GitHub", "Docker (Basic)", "npm/yarn", "VS Code", "Linux (Basic)"],
  },
  
];

export default function SkillsPage() {
  return (
    <>
    <div className="flex flex-col items-start p-8 min-h-screen bg-white overflow-x-hidden">
        <div className="h-screen w-full flex justify-center flex-col items-center">
          <div className="px-3 h-full flex justify-center flex-col items-center text-center">
            <h1 className="font-WorkSansRegular flex flex-col text-gray-500 text-3xl lg:text-6xl font-semibold leading-tight">
              <span>
              An overview of the 
                <span className="px-2 text-pink-500 font-bold">
                technologies and tools 
                </span>
                I use to build scalable,
              </span>
              <span>
                <span className="px-2 font-bold text-pink-500">
                efficient and user-friendly web experiences.
                </span>
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
    <section className="space-y-12 py-12 px-4">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <category.icon className="h-7 w-7 text-purple-600" />
              <h2 className="text-xl font-semibold">{category.title}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Learning Section */}
      <div className="mt-12 p-6 shadow-md rounded-lg border border-gray-200">
        <h2 className="text-2xl font-semibold mb-2">Learning & Exploring</h2>
        <p className="text-gray-500 mb-4">
          I'm always eager to learn and currently exploring these areas:
        </p>
        <div className="flex flex-wrap gap-2">
          {[ "Cloud Services (AWS/GCP Basics)", "Testing Frameworks (Jest/RTL)", "WebSockets"].map((item) => (
            <span
              key={item}
              className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
