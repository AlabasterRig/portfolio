import React from "react";
import { RxGithubLogo, RxLinkedinLogo, RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--footer-background)] text-[var(--text-footer)] z-10 relative">
      <div className="w-full flex flex-col items-center justify-center px-5 sm:px-10 pt-10">
        {/* Footer Links */}
        <div className="w-full flex flex-wrap justify-center md:justify-around gap-10 text-center">
          {/* Community Section */}
          <div className="flex flex-col items-center min-w-[12rem] sm:min-w-[15rem]">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Community</h3>
            <a
              href="https://github.com/AlabasterRig"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 text-sm sm:text-base hover:text-[var(--button-hover)] transition-colors duration-300 cursor-pointer"
            >
              <RxGithubLogo className="mr-2" />
              GitHub
            </a>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center min-w-[12rem] sm:min-w-[15rem]">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Socials</h3>
            <a
              href="https://www.instagram.com/utkrist2/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 text-sm sm:text-base hover:text-[var(--button-hover)] transition-colors duration-300 cursor-pointer"
            >
              <RxInstagramLogo className="mr-2" />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/utkrist-jaiswal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 text-sm sm:text-base hover:text-[var(--button-hover)] transition-colors duration-300 cursor-pointer"
            >
              <RxLinkedinLogo className="mr-2" />
              LinkedIn
            </a>
          </div>

          {/* About Section */}
          <div className="flex flex-col items-center min-w-[12rem] sm:min-w-[15rem]">
            <h3 className="font-bold text-lg sm:text-xl mb-4">About</h3>
            <a
              href="mailto:contact@utkri.st"
              className="my-3 text-sm sm:text-base hover:text-[var(--button-hover)] transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="/Utkrist-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="my-3 text-sm sm:text-base hover:text-[var(--button-hover)] transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full py-4 mt-10 text-center bg-[var(--footer-background)]">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Utkrist Jaiswal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
