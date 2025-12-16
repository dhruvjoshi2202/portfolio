"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0d12]/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="#home" className="text-2xl font-bold text-white">
          Dhruv<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group hover:text-white transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* Resume Button */}
          <Link
            href="/Dhruv.jpg"
            target="_blank"
            className="ml-6 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            Resume
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Menu"
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#0b0d12]/95 backdrop-blur-xl shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-8 gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white text-lg hover:text-blue-500 transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/Dhruv_Joshi_Resume.pdf"
            target="_blank"
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}
