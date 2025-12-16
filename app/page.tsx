import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <section id="home" className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-12">

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I’m Dhruv Joshi
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            I am a Full Stack & Web Developer building modern, responsive, and user-friendly web applications.  
            I turn ideas into interactive websites and apps.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/img/my.jpg" 
            alt="..."
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
            priority
          />
        </div>

        
      </div>
    </section>


    </>
  );
}
