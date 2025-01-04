"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { ExternalLinks } from "./ExternalLinks";

export const HomeBody = () => {
  return (
      <div className="flex flex-col md:flex-row md:pt-[200px] pt-[100px] items-center max-w-7xl mx-auto md:h-full h-screen">
        <div className="flex flex-col md:gap-5">
          <h1 className="text-[48px] md:text-[90px] leading-[55px] md:leading-[100px] mb-5">
            Hi, I&apos;m <br /> Tim Chen
          </h1>
          <p className="text-md md:text-[30px] text-white mb-3">
            I&apos;m a&nbsp;
            <TypeAnimation
              preRenderFirstString={true}
              className="font-bold"
              sequence={[
                "Full Stack Developer",
                1000,
                "Software Developer",
                1000,
                "Tech Enthusiast",
                1000,
                "Coffee Addict",
                1000,
                "Keyboard Enthusiast",
                1000,
                "Cat Dad",
                1000,
              ]}
              wrapper="span"
              speed={{type: 'keyStrokeDelayInMs', value: 90}}
              repeat={Infinity}
            />
          </p>
          <ExternalLinks />
        </div>
        <Image
        className="md:ml-20 rounded-full mt-20 shadow-circle size-64 ml-10 md:size-max"
        src="/tchen.png"
        alt="Professional portrait"
        width={600}
        height={600}
        quality={100}
        priority={true}
      />
      </div>
  );
};

export default HomeBody;
