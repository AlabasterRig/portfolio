import Image from "next/image";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { RxGithubLogo, RxLinkedinLogo, RxInstagramLogo } from "react-icons/rx";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full h-[4.063rem] fixed top-0 shadow-md shadow-[var(--navbar-shadow-bg)] bg-[var(--navbar-bg)] backdrop-blur-lg z-50 px-5 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[0.625rem]">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/Navlogo.svg"
            alt="logo"
            width={20}
            height={20}
            className="cursor-pointer hover:animate-bounce pb-1"
          />
          <span className="font-bold ml-[0.625rem] hidden sm:block text-[var(--text-navbar-main)]">
            Game Developer
          </span>
        </a>

        <div className="hidden md:flex w-[31.25rem] h-full flex-row items-center justify-around md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[var(--border-bg)] bg-[var(--navbar-button-bg)] mr-[0.938rem] px-[1.25rem] py-[0.625rem] rounded-full text-[var(--text-primary)] shadow-[2px_2px_5px_#a5a5a5, -2px_-2px_5px_#ffffff]">
            <a
              href="#about-me"
              className="cursor-pointer hover:text-[var(--button-hover)] transition-colors duration-300"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="cursor-pointer hover:text-[var(--button-hover)] transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:text-[var(--button-hover)] transition-colors duration-300"
            >
              Projects
            </a>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[#52616B] text-[#F0F5F9] hover:bg-[#1E2022] transition-all shadow-[2px_2px_5px_#a5a5a5, -2px_-2px_5px_#ffffff]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>

          <div className="flex flex-row gap-5">
            {/* Social Media Icons */}
            <a
              href="https://github.com/AlabasterRig"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[var(--navbar-socials-bg)] shadow-[2px_2px_5px_#a5a5a5, -2px_-2px_5px_#ffffff] hover:shadow-lg"
            >
              <RxGithubLogo size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/utkrist-jaiswal/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[var(--navbar-socials-bg)] shadow-[2px_2px_5px_#a5a5a5, -2px_-2px_5px_#ffffff] hover:shadow-lg"
            >
              <RxLinkedinLogo size={24} />
            </a>
            <a
              href="https://www.instagram.com/utkrist2/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[var(--navbar-socials-bg)] shadow-[2px_2px_5px_#a5a5a5, -2px_-2px_5px_#ffffff] hover:shadow-lg"
            >
              <RxInstagramLogo size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden w-full h-auto justify-center mt-2">
        <div className="flex items-center justify-between w-[90%] border border-[#1E2022] bg-[#52616B] px-4 py-2 rounded-full text-[#F0F5F9] shadow-[2px_2px_5px_#a5a5a5, -2px_-2px_5px_#ffffff]">
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
    </div>
  );
};

export default Navbar;
