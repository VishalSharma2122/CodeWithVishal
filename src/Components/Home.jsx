import "@fortawesome/fontawesome-free/css/all.min.css";
import Project from "./Project";
import Skill from "./Skill";
import About from "./About";
function Home() {
  const cvdwn = () => {
    const link = document.createElement("a");
    link.href = "/Vishal_Sharma.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <>
      <div
        className="flex flex-col items-start p-8 min-h-screen bg-opacity-80 bg-white "
        style={{
          backgroundImage: "url('/Designer-removebg-preview.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "contain",
        }}
      >
        <div className="h-screen w-full flex justify-center flex-col items-center">
          <div className=" px-4 h-full flex justify-center flex-col items-center text-center">
            <h1 className="font-WorkSansRegular flex flex-col text-gray-500 text-4xl lg:text-6xl font-semibold leading-tight">
              <span>
                Hello! I'M
                <span className="px-2 text-pink-500 font-bold">
                  Vishal Sharma,
                </span>
                a Passionate
              </span>
              <>
                <span className="px-2 font-bold text-pink-500">
                  Software Developer.
                </span>
              </>
            </h1>
          </div>
        </div>
        <div className="text-center flex flex-col items-center justify-center h-full">
          <p className="text-gray-500 text-2xl lg:text-3xl font-WorkSansRegular font-semibold leading-relaxed">
            I am a{" "}
            <span className="text-pink-500 font-bold">
              21-year-old graduate
            </span>{" "}
            with a Bachelor of Computer Applications (BCA), passionate about
            cutting-edge technologies and equipped with a strong foundation in
            core areas of computer science.
          </p>
          <p className="text-gray-500 text-2xl lg:text-3xl font-WorkSansRegular font-semibold leading-relaxed mt-4">
            <span className="text-pink-500 font-bold">Languages:</span>{" "}
            JavaScript, Python
          </p>
          <p className="text-gray-500 text-2xl lg:text-3xl font-WorkSansRegular font-semibold leading-relaxed mt-2">
            <span className="text-pink-500 font-bold">Web Development:</span>{" "}
            Skilled in MERN Stack (MongoDB, Express.js, React.js, Node.js)
          </p>
          <div />

          <div className="flex mt-4 space-x-8 text-5xl">
          <a
            href="mailto:vishalpandit3456g@gmail.com"
            className="text-gray-900 hover:opacity-75 inline-flex items-center"
          >
            <i className="fas fa-envelope"></i>
          </a>
            <a
              href="https://www.linkedin.com/in/vishalsharma00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:opacity-75"
            >
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
        <div />
      </div>
      <Project />
      <Skill/>
      <About/>
    </>
  );
}

export default Home;
