import React from 'react'

const page = () => {
  return (

    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-10 md:mb-0 flex justify-center">
          <img
            src="my.jpg" 
            alt="Dhruv Joshi"
            className="w-72 h-72 rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="flex-1 md:pl-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 mb-4">
            I am Dhruv Joshi, a passionate Full Stack and Web Developer. I love creating modern, responsive, and user-friendly web applications.
          </p>
          <p className="text-gray-600 mb-4">
            My expertise includes HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. I enjoy turning ideas into real-world applications that solve problems and delight users.
          </p>
          <p className="text-gray-600">
            I am constantly learning new technologies and improving my skills to stay updated with the latest trends in web development.
          </p>
        </div>

      </div>
    </section>
  );
}

export default page