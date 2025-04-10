"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxInstagramLogo,
  RxHamburgerMenu,
  RxCross2,
} from "react-icons/rx";
import { useTheme } from "@/context/ThemeContext";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement | null>(null);

  // Define navLinks and socialLinks with useMemo to avoid re-creation on every render.
  const navLinks = useMemo(
    () => [
      { id: "about-me", label: "About Me" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      { icon: RxGithubLogo, href: "https://github.com/AlabasterRig" },
      { icon: RxLinkedinLogo, href: "https://linkedin.com/in/utkrist-jaiswal" },
      { icon: RxInstagramLogo, href: "https://instagram.com/utkrist2" },
    ],
    []
  );

  // Scroll Spy: Detect which section is currently in view.
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the section is visible.
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navLinks]);

  // Close mobile menu when clicking outside of it.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        navRef.current &&
        navRef.current instanceof HTMLElement &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      ref={navRef}
      role="navigation"
      initial="hidden"
      animate="visible"
      className="fixed top-0 w-full z-50 bg-[var(--navbar-bg)] backdrop-blur-lg gap-14 shadow-lg shadow-[var(--navbar-shadow-bg)] px-4 sm:px-8 h-16"
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo Section */}
        <motion.div variants={slideInFromLeft(0.5)} className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Navlogo.svg"
              alt="Logo"
              width={28}
              height={28}
              className="transition-transform duration-300 hover:animate-bounce"
            />
            <span className="hidden sm:block font-bold text-lg text-[var(--text-navbar-main)]">
              Game Developer
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="hidden md:flex items-center gap-8"
        >
          <div className="flex items-center gap-14 bg-[var(--navbar-button-bg)] px-6 py-2 rounded-full border border-[var(--border-bg)] shadow-nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-[var(--button-hover)] font-medium"
                    : "text-[var(--text-primary)] hover:text-[var(--button-hover)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Section: Theme Toggle & Social Links */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex items-center gap-4"
        >
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-[var(--theme-toggle-bg)] text-[var(--theme-toggle-text)] hover:bg-[var(--theme-toggle-hover)] transition-all shadow-theme"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
                className="w-6 h-6"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-[var(--navbar-socials-bg)] shadow-social hover:shadow-social-hover"
              >
                <social.icon size={24} className="text-[var(--social-icon)]" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-full bg-[var(--navbar-socials-bg)] shadow-social focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--theme-toggle-hover)]"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <RxCross2 size={24} className="text-[var(--social-icon)]" />
            ) : (
              <RxHamburgerMenu size={24} className="text-[var(--social-icon)]" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-[var(--navbar-bg)] backdrop-blur-lg py-4 px-6 shadow-lg"
          >
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-[var(--button-hover)] font-medium"
                      : "text-[var(--text-primary)] hover:text-[var(--button-hover)]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-4 mt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[var(--navbar-socials-bg)] shadow-social hover:shadow-social-hover"
                  >
                    <social.icon size={24} className="text-[var(--social-icon)]" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
