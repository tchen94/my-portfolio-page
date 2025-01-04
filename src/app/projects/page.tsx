import React from "react";
import Image from "next/image";
import TechStack from "../components/TechStack";
import {
  HEARTVIEW_TECH_STACK,
  PORTFOLIO_TECH_STACK,
} from "../constants/constants";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col mt-20 md:mt-20 sm:px-16 px-6 max-w-7xl w-full h-full mx-auto ">
      <h1 className="text-[30px] md:text-[50px] md:mb-10 mb-3">Projects</h1>
      <div className="flex flex-col items-start gap-5 w-full  mb-10 justify-between animate-fadeinleft">
        <div className="flex flex-col md:flex-row md:p-4 bg-gray-700 rounded-xl md:gap-2">
          <div className="flex flex-col md:flex-row p-4 gap-5">
            <div className="flex flex-col gap-5">
              <header className="">
                <h3 className="text-[30px] font-bold">HeartView Beat Editor</h3>
              </header>
              <div className="flex flex-col">
                <p className="text-white">
                  HeartView Beat Editor is a cardiac data preprocessor used by
                  health informatics researchers to validate and manipulate
                  data.
                  The editor currently supports ECG data but will support
                  PPG in the near future. Once edits are made, the application
                  saves the 
                  changes through the backend and communicates with the main
                  dashboard for pushed updates.
                </p>
                <div className="flex flex-row">
                  <span className="font-bold mt-3 md:mt-5">
                    Technologies used:{" "}
                  </span>
                  <TechStack techArray={HEARTVIEW_TECH_STACK} />
                </div>
              </div>
            </div>
            <Image
              className="relative rounded-lg"
              src="/heartview.png"
              alt="HeartView"
              width={600}
              height={300}
            />
          </div>
        </div>
        <div className="flex flex-col md:p-4 bg-gray-700 rounded-xl md:gap-2">
          <div className="flex flex-col md:flex-row p-4 gap-5">
            <div className="flex flex-col gap-5">
              <header className="">
                <h3 className="text-[30px] font-bold">My Portfolio!</h3>
              </header>
              <p className="text-white">
                Really enjoyed and had a fun time developing this portfolio
                page. Developing this portfolio allowed me to explore
                <br /> the depths and quirks of Next.js and the infamous
                TypeScript for it&apos;s optional static typing.
              </p>
              <div className="flex flex-row">
                <span className="font-bold mt-3 md:mt-7">
                  Technologies used:{" "}
                </span>
                <TechStack techArray={PORTFOLIO_TECH_STACK} />
              </div>
            </div>
            <Image
              className="relative rounded-lg"
              src="/myprofile.png"
              alt="My Portfolio"
              width={600}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
