import Head from "next/head";
import { useState } from "react";
import ChronoCard from "@components/ChronoCard";
import { workData } from "./api/workData";
import { NextPage } from "next";
import SplineObj from "@components/SplineObject";
import { spaceBoards } from "@font";

const Work: NextPage = () => {
  return (
    <>
      <Head>
      
        <title>RoadMap | GrokLabs</title>
        <meta
          name="description"
          content="RoadMap | GrokLabs"
        />
      </Head>
      
      <div className="flex flex-col items-center w-full h-screen p-5 overflow-auto sm:p-0">
        <div
          className={`ml-8 sm:ml-0 text-3xl md:text-4xl xl:text-5xl animated-heading bold my-2 md:my-10 ${spaceBoards.className}`}
        >
         GrokLabs RoadMap Version 1
        </div>
        <div className="z-0 flex flex-col w-full h-full grid-cols-12 md:grid text-gray-50">
          {workData.map((curElem) => {
            return <ChronoCard key={curElem.duration} curElem={curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Work;
