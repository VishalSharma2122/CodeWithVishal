import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className=" flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl font-bold cursor-pointer">
              Code<span className="text-cyan-500">With</span>
              <span className="text-pink-500">Vishal</span>
            </h1>
          </Link>
        </div>
        <div className=" flex items-center gap-10 ">
          <ul className="flex font-bold items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Popover>
                <PopoverTrigger className= "cursor-pointer">Say Hello!</PopoverTrigger>
                <PopoverContent>
                <div className="mt-2 space-x-5 text-4xl">
        <a href="#" className="text-blue-600 hover:opacity-75">
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/vishalsharma2122"
            className="text-black hover:opacity-75"
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
                </PopoverContent>
              </Popover>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
