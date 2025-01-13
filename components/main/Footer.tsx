import React from "react";
import { RxGithubLogo, RxLinkedinLogo, RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full relative mt-20 shadow-lg">
      <div className="w-full flex flex-col items-center justify-center m-auto px-5 sm:px-10">
        {/* Footer Links */}
        <div className="w-full flex flex-wrap justify-center md:justify-around mb-1 text-[#1E2022] gap-5 sm:gap-10">
          {/* Community Section */}
          <div className="min-w-[12rem] sm:min-w-[15rem] h-auto flex flex-col justify-start items-center text-center">
            <div className="font-bold text-[1rem] sm:text-[1.125rem]">Community</div>
            <p className="flex flex-row items-center my-[1rem] cursor-pointer">
              <RxGithubLogo />
              <a
                href="https://github.com/AlabasterRig"
                className="text-[0.875rem] sm:text-[1rem] ml-[0.375rem]"
              >
                GitHub
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[12rem] sm:min-w-[15rem] h-auto flex flex-col items-center justify-start text-center">
            <div className="font-bold text-[1rem] sm:text-[1.125rem]">Social Media</div>
            <p className="flex flex-row items-center my-[0.625rem] cursor-pointer">
              <RxInstagramLogo />
              <a
                href="https://www.instagram.com/utkrist2/"
                className="text-[0.875rem] sm:text-[1rem] ml-[0.375rem]"
              >
                Instagram
              </a>
            </p>
            <p className="flex flex-row items-center my-[0.625rem] cursor-pointer">
              <RxLinkedinLogo />
              <a
                href="https://www.linkedin.com/in/utkrist-jaiswal/"
                className="text-[0.875rem] sm:text-[1rem] ml-[0.375rem]"
              >
                Linkedin
              </a>
            </p>
          </div>

          {/* About Section */}
          <div className="min-w-[12rem] sm:min-w-[15rem] h-auto flex flex-col items-center justify-start text-center">
            <div className="font-bold text-[1rem] sm:text-[1.125rem]">About</div>
            <p className="flex flex-row items-center my-[0.625rem] cursor-pointer">
              <a
                href="mailto:contact@utkri.st"
                className="text-[0.875rem] sm:text-[1rem] ml-[0.375rem]"
              >
                contact@utkri.st
              </a>
            </p>
            <p className="flex flex-row items-center my-[0.625rem] cursor-pointer">
              <a href="https://drive.google.com/file/d/1AR4oDPWyQT5Jl4lCaYBhmsgh5i4aCF-J/view?usp=sharing">
                <span className="text-[0.875rem] sm:text-[1rem] ml-[0.375rem]">Resume</span>
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full h-auto flex bg-[#1E2022] flex-row items-center justify-center">
          <div className="text-[0.875rem] sm:text-[1rem] text-[#F0F5F9] text-center py-[0.625rem]">
            &copy; Utkrist Jaiswal
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
