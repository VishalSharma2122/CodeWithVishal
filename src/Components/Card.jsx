// components/Card.js
import React from "react";

function Card({ title, description, image, link }) {
  return (
    <div className="rounded-md shadow-md  border border-gray-200  bg-[#511cac] text-white overflow-hidden">
      <img
        src={image}
        alt={title}
        className="object-cover object-center w-full h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-wide">{title}</h2>
          <p className="text-white font-bold text-base">{description}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full p-3 font-semibold tracking-wide rounded-md bg-gray-900 text-gray-200 hover:bg-gray-700 transition cursor-pointer text-center block"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Card;
