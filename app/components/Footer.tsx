"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo & Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white drop-shadow-lg">
            Dhruv<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Building scalable & modern web experiences.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-5 md:mt-0">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-white transition transform hover:scale-110"
          >
            <FaGithub size={22} />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-white transition transform hover:scale-110"
          >
            <FaLinkedin size={22} />
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            className="hover:text-white transition transform hover:scale-110"
          >
            <FaTwitter size={22} />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right mt-5 md:mt-0">
          <p className="text-gray-400 text-sm">
            <span className="font-semibold text-white">Email:</span>{" "}
            <Link
              href="mailto:your.email@example.com"
              className="hover:text-blue-500 transition"
            >
              your.email@example.com
            </Link>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            &copy; {new Date().getFullYear()} Dhruv Joshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
