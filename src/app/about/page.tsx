import React from "react";
import Carousel from "../components/Carousel";

export default function AboutMePage() {
  return (
    <section className="flex md:max-w-screen-[1440px] md:gap-4">
      <div className="flex flex-col md:flex-row items-start justify-between md:gap-20 gap-10 mx-auto items-center md:mt-[300px] mt-[100px]">
        <div className="flex-1 text-left max-w-lg md:pl-[50px] pl-5 pr-5">
          <h1 className="text-lg md:text-[50px] animate-fadeintop">ABOUT ME</h1>
          <p className="transition delay-200 text-sm md:text-[15px] text-white pt-10 animate-fadeinleft">
            Hey 👋 <br />
            <br /> I&apos;m Tim, a long time New Yorker now in Massachusetts and
            pursuing my dreams as a Software Engineer. <br />
            <br />
            With over 3 years of experience, I&apos;ve maintained and developed
            software in the telecom industry, involving complex SQL query
            validations and presenting visualizations to the clients in a
            digestible manner. Currently collaborating with health informatics
            researchers on a web based cardiac data preprocessing application.
            <br />
            <br />
            Outside of coding, I&apos;m a proud cat dad and enjoy building keyboards
            during my spare time. These days, I&apos;m also training for a
            triathalon!
          </p>
        </div>
        <div className="items-center max-w-60 md:max-w-lg overflow-hidden mx-auto">
        <Carousel />
      </div>
      </div>
    </section>
  );
}
