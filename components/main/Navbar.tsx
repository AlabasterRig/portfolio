import Image from "next/image";
import React from "react";
import { Socials } from "@/constants";

const Navbar = () => {
  return (
    <div className="w-full h-[4.063rem] fixed top-0 shadow-md shadow-[#1E2022] bg-[#1E2022] backdrop-blur-lg z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[0.625rem]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Navlogo.svg"
            alt="logo"
            width={20}
            height={20}
            className="cursor-pointer hover:animate-bounce pb-1"
          />

          <span className="font-bold ml-[0.625rem] hidden md:block text-[#F0F5F9]">
            Game Developer
          </span>
        </a>

        <div className="w-[31.25rem] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#1E2022] bg-[#52616B] mr-[0.938rem] px-[1.25rem] py-[0.625rem] rounded-full text-[#F0F5F9]">
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
