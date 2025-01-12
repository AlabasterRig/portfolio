import React from "react";
import { RxGithubLogo, RxLinkedinLogo, RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full relative mt-20 shadow-lg">
      <div className="w-full flex flex-col items-center justify-center m-auto px-5 sm:px-10">
        {/* Footer Links */}
        <div className="w-full h-full flex mb-1 text-[#1E2022] flex-col md:flex-row items-center justify-around gap-10 flex-wrap">
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col justify-start items-center text-center">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[20px] cursor-pointer">
              <RxGithubLogo />
              <a
                href="https://github.com/AlabasterRig"
                className="text-[15px] ml-[6px]"
              >
                GitHub
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start text-center">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <RxInstagramLogo />
              <a
                href="https://www.instagram.com/utkrist2/"
                className="text-[15px] ml-[6px]"
              >
                Instagram
              </a>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <RxLinkedinLogo />
              <a
                href="https://www.linkedin.com/in/utkrist-jaiswal/"
                className="text-[15px] ml-[6px]"
              >
                Linkedin
              </a>
            </p>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start text-center">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <a
                href="mailto:contact@utkri.st"
                className="text-[15px] ml-[6px]"
              >
                contact@utkri.st
              </a>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <a href="https://drive.google.com/file/d/1AR4oDPWyQT5Jl4lCaYBhmsgh5i4aCF-J/view?usp=sharing">
                <span className="text-[15px] ml-[6px]">Resume</span>
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full h-auto flex bg-[#1E2022] flex-row items-center justify-center">
          <div className="text-[15px] text-[#F0F5F9] text-center py-1">
            &copy; Utkrist Jaiswal
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
