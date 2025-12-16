import React from 'react'
import Home from '../page'
import Link from 'next/link'


const Navbar = () => {
  return (
    <header className="text-gray-600 body-font shadow-sm sticky top-0 bg-white z-50">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl font-bold">Dhruv Joshi</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900 transition-colors">Home</Link>
      <Link href="about" className="mr-5 hover:text-gray-900 transition-colors">About</Link>
      <Link href="skills" className="mr-5 hover:text-gray-900 transition-colors">Skills</Link>
      <Link href="projects" className="mr-5 hover:text-gray-900 transition-colors">Projects</Link>
      <Link href="contact" className="mr-5 hover:text-gray-900 transition-colors">Contact</Link>
    </nav>
    <a 
  href="mailto:dhruv@example.com" 
  className="inline-flex items-center bg-blue-500 text-white border-0 py-1 px-4 rounded text-base mt-4 md:mt-0 hover:bg-blue-600 transition-colors"
>
  Hire Me
  <svg 
    fill="none" 
    stroke="currentColor" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth="2" 
    className="w-4 h-4 ml-1" 
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
</a>

  </div>
</header>

  )
}

export default Navbar