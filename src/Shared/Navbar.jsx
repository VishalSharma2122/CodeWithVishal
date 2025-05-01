import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className=" flex items-center justify-between mx-auto max-w-7xl h-16 backdrop-blur-md bg-white/50 sticky top-0 z-50">
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl font-bold cursor-pointer hidden md:block">
              Code<span className="text-cyan-500">With</span>
              <span className="text-pink-500">Vishal</span>
            </h1>
            <img
            src="/Designer-removebg-preview.png"
            alt="logo"
            className="w-10 h-10 md:hidden"
          />
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
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
