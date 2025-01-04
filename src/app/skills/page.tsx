import React from "react";
import Image from "next/image";
import TechStack from "../components/TechStack";
import {
  FRONTENDTECHTOP,
  FRONTENDTECHBOTTOM,
  OTHERTECHSONE,
  OTHERTECHSTWO,
} from "../constants/constants";

export default function SkillsPage() {
  return (
      <div className="flex flex-col items-center justify-center mt-[100px] md:mt-[200px] md:ml-10 h-screen md:h-full md:gap-4">
        <div className=" flex flex-col mb-10">
          <h1 className="animate-fadeintop text-2xl md:text-[80px]">Tech Stack</h1>
          <p className="animate-fadeintop text-center font-bold text-white md:mt-5">
            Frameworks and languages I currently use
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:items-center justify-center mb-5 ml-5">
          <h1 className="font-[family-name:var(--font-kode-mono)] text-l md:text-xl md:mr-10 mb-5">
            Frontend Languages <br />
            and Frameworks
          </h1>
          <div className="flex flex-row">
            <TechStack techArray={FRONTENDTECHTOP} />
          </div>
          <div className="flex flex-row mr-5">
            <TechStack techArray={FRONTENDTECHBOTTOM} />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:items-center justify-center ml-5">
          <h1 className="font-[family-name:var(--font-kode-mono)] text-l md:text-xl md:mr-10">
            Backend, Database <br />
            and Other Techs
          </h1>
          <div className="flex flex-row md:ml-2">
            <TechStack techArray={OTHERTECHSONE} />
          </div>
          <div className="flex flex-row mr-5">
            <TechStack techArray={OTHERTECHSTWO} />
          </div>
        </div>
        <Image
          className="mt-5"
          src="/programmer.png"
          alt="Programmer"
          width={700}
          height={700}
          quality={100}
        />
      </div>
  );
}
