import React from "react";
import { RxGithubLogo, RxLinkedinLogo, RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full bg-[#1E2022] z-10 relative">
      <div className="w-full flex flex-col items-center justify-center px-5 sm:px-10 py-10">
        {/* Footer Links */}
        <div className="w-full flex flex-wrap justify-center md:justify-around gap-10 text-center text-white">
          {/* Community Section */}
          <div className="min-w-[12rem] sm:min-w-[15rem] h-auto flex flex-col items-center">
            <div className="font-bold text-lg sm:text-xl mb-4">Community</div>
            <p className="flex flex-row items-center my-3 cursor-pointer hover:text-[#C9D6DF] transition">
              <RxGithubLogo />
              <a
                href="https://github.com/AlabasterRig"
                className="ml-2 text-sm sm:text-base"
              >
                GitHub
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[12rem] sm:min-w-[15rem] h-auto flex flex-col items-center">
            <div className="font-bold text-lg sm:text-xl mb-4">Social Media</div>
            <p className="flex flex-row items-center my-3 cursor-pointer hover:text-[#C9D6DF] transition">
              <RxInstagramLogo />
              <a
                href="https://www.instagram.com/utkrist2/"
                className="ml-2 text-sm sm:text-base"
              >
                Instagram
              </a>
            </p>
            <p className="flex flex-row items-center my-3 cursor-pointer hover:text-[#C9D6DF] transition">
              <RxLinkedinLogo />
              <a
                href="https://www.linkedin.com/in/utkrist-jaiswal/"
                className="ml-2 text-sm sm:text-base"
              >
                Linkedin
              </a>
            </p>
          </div>

          {/* About Section */}
          <div className="min-w-[12rem] sm:min-w-[15rem] h-auto flex flex-col items-center">
            <div className="font-bold text-lg sm:text-xl mb-4">About</div>
            <p className="flex flex-row items-center my-3 cursor-pointer hover:text-[#C9D6DF] transition">
              <a
                href="mailto:contact@utkri.st"
                className="ml-2 text-sm sm:text-base"
              >
                contact@utkri.st
              </a>
            </p>
            <p className="flex flex-row items-center my-3 cursor-pointer hover:text-[#C9D6DF] transition">
              <a href="https://drive.google.com/file/d/1AR4oDPWyQT5Jl4lCaYBhmsgh5i4aCF-J/view?usp=sharing">
                <span className="ml-2 text-sm sm:text-base">Resume</span>
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full h-auto flex justify-center py-4 bg-[#1E2022]">
          <div className="text-sm sm:text-base text-[#F0F5F9] text-center">
            &copy; Utkrist Jaiswal
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
