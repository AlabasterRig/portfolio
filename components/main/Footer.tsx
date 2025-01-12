import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxInstagramLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full relative text-white shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col justify-start items-center">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[40px] cursor-pointer">
              <RxGithubLogo />
              <a href="https://github.com/AlabasterRig" className="text-[15px] ml-[6px]">GitHub</a>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <a href="https://www.instagram.com/utkrist2/" className="text-[15px] ml-[6px]">Instagram</a>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <a href="https://www.linkedin.com/in/utkrist-jaiswal/" className="text-[15px] ml-[6px]">Linkedin</a>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="mailto:contact@utkri.st" className="text-[15px] ml-[6px]">contact@utkri.st</a>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://drive.google.com/file/d/1AR4oDPWyQT5Jl4lCaYBhmsgh5i4aCF-J/view?usp=sharing"><span className="text-[15px] ml-[6px]">Resume</span></a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center ">
            &copy; Utkrist Jaiswal
        </div>

      </div>
    </div>
  );
};

export default Footer;
