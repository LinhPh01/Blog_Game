"use client";
import React from "react";
import TextEffect from "./Effect";

const Welcome = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video nền */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
          type="video/webm"
        />
      </video>

      {/* Nội dung phía trước video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="bg-black bg-opacity-50 p-8 border-2 border-slate-50 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-yellow-400 font-bold">
            WELCOME TO BLOGGAME <span className="text-yellow-400">PHL</span>
          </h1>
          <TextEffect />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
