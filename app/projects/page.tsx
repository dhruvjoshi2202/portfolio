import React from 'react'

const page = () => {
 
  const projects = [
    {
      name: "Portfolio",
      description: "My personal portfolio website built using Next.js and Tailwind CSS to showcase my projects and skills.",
      github: "https://github.com/yourusername/portfolio",
      demo: "#",
    },
    {
      name: "TripTrack",
      description: "A travel tracking application to manage trips, destinations, and travel logs with interactive maps.",
      github: "https://github.com/yourusername/triptrack",
      demo: "#",
    },
    {
      name: "E-Book Reader",
      description: "A web-based e-book reader application with library management and reading progress tracking.",
      github: "https://github.com/yourusername/ebook-reader",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors text-sm"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

 
export default page