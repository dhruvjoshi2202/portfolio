import Link from "next/link";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio showcasing my skills, projects, and experience with a clean UI and optimized performance.",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "GitHub"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.vercel.app",
  },
  {
    title: "Meesho Website Clone",
    description:
      "A responsive e-commerce website clone inspired by Meesho, built with modern frontend practices and clean architecture.",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "GitHub"],
    github: "https://github.com/yourusername/meesho-clone",
    live: "",
  },
  {
    title: "E-Book Reader",
    description:
      "A Python-based e-book reader application integrating external APIs for content retrieval and reading experience.",
    tech: ["Python", "APIs", "File Handling"],
    github: "https://github.com/yourusername/ebook-reader",
    live: "",
  },
  {
    title: "TripTrack – Travel Management System",
    description:
      "A travel trip management system designed to organize trips, itineraries, and user data efficiently.",
    tech: ["Python", "APIs", "Database"],
    github: "https://github.com/yourusername/triptrack",
    live: "",
  },
  {
    title: "REST API Backend",
    description:
      "Scalable RESTful API built for authentication, data handling, and integration with frontend applications.",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/rest-api",
    live: "",
  },
  {
    title: "Full Stack CRUD Application",
    description:
      "A full stack CRUD application demonstrating clean architecture, authentication, and responsive UI.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/fullstack-crud",
    live: "",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0b0d12] text-white pt-24 pb-12 px-5 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* ===== HEADER ===== */}
        <section className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            My <span className="text-blue-500">Projects</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            A collection of projects I’ve built to apply real-world concepts,
            improve problem-solving skills, and deliver scalable applications.
          </p>
        </section>

        {/* ===== PROJECT GRID ===== */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-gray-700 bg-white/5 p-6
              flex flex-col justify-between hover:border-blue-500 transition"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md border border-gray-700
                      text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-sm text-blue-400 hover:text-blue-300 transition"
                  >
                    GitHub →
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="text-sm text-blue-400 hover:text-blue-300 transition"
                  >
                    Live Demo →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* ===== FOOTER TEXT ===== */}
        <section className="max-w-3xl">
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            These projects reflect my continuous learning journey and my ability
            to build real-world applications using modern technologies.
          </p>
        </section>

      </div>
    </main>
  );
}
