import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col items-start p-8 min-h-screen bg-white overflow-x-hidden">
        <div className="h-screen w-full flex justify-center flex-col items-center">
          <div className="px-3 h-full flex justify-center flex-col items-center text-center">
            <h1 className="font-WorkSansRegular flex flex-col text-gray-500 text-3xl lg:text-6xl font-semibold leading-tight">
              <span>
                Discover more about my journey,
                <span className="px-2 text-pink-500 font-bold">
                  explore my passions
                </span>
                and find out how we can
              </span>
              <span>
                <span className="px-2 font-bold text-pink-500">
                  connect and collaborate.
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

      <section className="py-12 px-4 max-w-4xl mx-auto space-y-12">
        {/* My Journey Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-3xl font-semibold">My Journey</h2>
          <div className="text-gray-600 space-y-4">
            <p>
              Hello! I'm Vishal Sharma, currently pursuing a Bachelor of
              Computer Applications (BCA). My passion for technology sparked
              early on, leading me down the exciting path of web development. I
              thrive on transforming complex problems into elegant, efficient,
              and user-friendly digital solutions.
            </p>
            <p>
              As a full-stack developer, I enjoy working on both the front-end
              and back-end aspects of applications. Building intuitive
              interfaces with modern frameworks like React, coupled with robust
              server-side logic using Node.js and databases like MongoDB, is
              where I find my flow. I take pride in creating seamless user
              experiences and ensuring that every line of code contributes to a
              cohesive whole.
            </p>
            <p>
              I'm a firm believer in continuous learning and constantly explore
              new technologies and best practices to refine my skills. Whether
              it's mastering a new framework, contributing to open-source
              projects, or collaborating on exciting ideas, I'm always eager for
              the next challenge.
            </p>
            <p>
              Beyond coding, I enjoy reading tech blogs. Feel free to explore my
              projects and skills, and let's connect!
            </p>
          </div>
        </div>

        {/* Contact & Connect Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Contact & Connect</h2>
          <p className="text-gray-500">
            Interested in collaborating or just want to say hi? Reach out!
          </p>
          <div className="flex flex-wrap gap-4 mt-2 text-3xl">
            <a
              href="mailto:vishalpandit3456g@gmail.com"
              className="text-gray-900 hover:opacity-75 inline-flex items-center"
            >
              <i className="fas fa-envelope"></i>
            </a>

            <a href="#" className="text-blue-600 hover:opacity-75">
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/vishalsharma2122"
              className="text-gray-900 hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/pandatvishal315/"
              className="text-pink-500 hover:opacity-75"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
