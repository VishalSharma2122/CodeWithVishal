import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";
function Home() {
  const cvdwn = () => {
    const link = document.createElement("a");
    link.href = "/public/Vishal Sharma.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <>
      <Navbar />

      <div
        className="flex flex-col items-start p-8 min-h-screen bg-opacity-80 "
        style={{
          backgroundImage: "url('/Designer-removebg-preview.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "contain",
        }}
      >
        <div className="text-left">
          <b className="text-red-500 text-7xl hover:text-pink-500 ">Hi! I'M </b>
          <br />
          <b className="text-cyan-500 text-6xl ">Vishal Sharma</b>
          <br />
          <pre className="text-pink-500 text-2xl mt-4 whitespace-pre-wrap font-semibold ">
            {`I am a 21-year-old graduate with a Bachelor of Computer Applications (BCA), passionate about cutting-edge technologies and equipped with a strong foundation in core areas of computer science.

Languages:JavaScript, Python 
Web Development: Skilled in MERN Stack (MongoDB, Express.js, React.js, Node.js)

I have successfully developed and deployed full-stack projects, built using the MERN stack (MongoDB, Express.js, React.js, Node.js), including:

Job Portal – A dynamic platform that seamlessly connects job seekers with potential employers, featuring job listings, role-based logins, and application management.

Learning Management System (LMS) – A comprehensive solution for managing educational content, tracking user progress, and providing interactive features like course creation, quizzes, and real-time updates.

URL Shortener – An innovative and efficient tool for shortening long URLs, allowing users to create concise, trackable links.`}
          </pre>
          <div className="flex mt-4 space-x-8 text-5xl">
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
              href="https://wa.me/6398028868"
              className="text-green-500 hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

            <a
              href="https://www.instagram.com/pandatvishal315/"
              className="text-pink-500 hover:opacity-75"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <button
            className="mt-6 flex items-center bg-teal-400 text-white font-bold py-2 px-5 rounded-full hover:bg-pink-500 transition duration-300"
            onClick={cvdwn}
          >
            <span>Download CV</span>
            <svg
              className="w-10 h-10 ml-2"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="37"
                cy="37"
                r="35.5"
                stroke="black"
                strokeWidth="3"
              ></circle>
              <path
                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="px-4 py-10  min-h-screen">
        <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-md shadow-md bg-[#511cac] text-white overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRsl1bqkq3tg39ykaNKLaiA2qXqd1PaG1sw&s"
              alt="Job Portal"
              className="object-cover object-center w-full h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-wide">Job Portal</h2>
                <p className="text-white font-bold text-base">
                  A platform for students and companies to connect. Features job
                  listings, applications, and role-based login.
                </p>
              </div>
              <a
                href="https://github.com/VishalSharma2122/jobPortal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 font-semibold tracking-wide rounded-md bg-gray-900 text-gray-200 hover:bg-gray-700 transition cursor-pointer text-center block"
              >
                Read more
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="rounded-md shadow-md bg-[#511cac] text-white overflow-hidden">
            <img
              src="data:image/jpeg;base64,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"
              alt="URL Shortener"
              className="object-cover object-center w-full h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-wide">
                  URL Shortener
                </h2>
                <p className="text-white font-bold text-base">
                  A simple and effective MERN stack project that shortens long
                  URLs and tracks click analytics.
                </p>
              </div>
              <a
                href="https://github.com/VishalSharma2122/urlShortner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 font-semibold tracking-wide rounded-md bg-gray-900 text-gray-200 hover:bg-gray-700 transition cursor-pointer text-center block"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-md shadow-md bg-[#511cac] text-white overflow-hidden">
            <img
              src="data:image/jpeg;base64,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"
              alt="LMS"
              className="object-cover object-center w-full h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-wide">LMS</h2>
                <p className="text-white font-bold text-base">
                  A fully responsive Learning Management System (LMS) with
                  features like course creation, quizzes, progress tracking, and
                  real-time updates using React and Node.
                </p>
              </div>
              <button className="w-full p-3 font-semibold tracking-wide rounded-md bg-gray-900 text-gray-200 hover:bg-gray-700 transition">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
