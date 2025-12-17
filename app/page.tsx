import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative bg-[#0b0d12] text-white overflow-hidden">

      {/* Background Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>

      {/* ================= HERO ================= */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-24 flex flex-col-reverse md:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Full Stack Developer building{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              scalable web experiences
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl mb-8">
            I’m <span className="text-white font-semibold">Dhruv Joshi</span>, a
            Full Stack Developer focused on crafting high-performance,
            production-ready applications using{" "}
            <span className="text-blue-400">Next.js, Node.js & MongoDB</span>.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
            >
              View Projects
            </Link>

            {/* Resume Download */}
            <Link
              href="/"   // Place your resume in public/dhruv.pdf
              target="_blank"
              className="px-8 py-3 rounded-xl border border-gray-600 hover:border-white transition"
            >
              Download Resume
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl"></div>
          <Image
            src="/new.jpg"  // Place your image in public/img/my.jpg
            alt="Dhruv Joshi"
            width={400}
            height={400}
            className="relative rounded-3xl object-cover shadow-2xl border border-gray-800"
            priority
          />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 max-w-3xl leading-relaxed text-lg">
          I am a passionate Full Stack Developer with a strong foundation in
          modern web technologies. I enjoy transforming complex problems into
          clean, scalable and maintainable solutions.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            "Next.js",
            "React",
            "Node.js",
            "MongoDB",
            "JavaScript",
            "Tailwind CSS",
            "REST APIs",
            "Git & GitHub",
          ].map((skill) => (
            <div
              key={skill}
              className="py-3 px-5 rounded-xl border border-gray-700 text-center text-gray-300 hover:border-white hover:text-white transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
          id="projects"
          className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            
            {/* Portfolio */}
            <div className="p-7 rounded-2xl border border-gray-700 bg-white/5 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-3">
                Personal Portfolio
              </h3>

              <p className="text-gray-400 mb-5 leading-relaxed">
                My personal developer portfolio built to showcase projects, skills,
                and experience with a clean, responsive, and performance-focused UI.
              </p>

              <div className="flex flex-wrap gap-2 text-sm text-blue-400">
                <span>Next.js</span>
                <span>· Tailwind</span>
                <span>· Vercel</span>
                <span>· GitHub</span>
              </div>
            </div>

            {/* Meesho Clone */}
            <div className="p-7 rounded-2xl border border-gray-700 bg-white/5 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-3">
                Meesho Website Clone
              </h3>

              <p className="text-gray-400 mb-5 leading-relaxed">
                A responsive e-commerce website clone inspired by Meesho,
                focusing on modern UI patterns and scalable frontend architecture.
              </p>

              <div className="flex flex-wrap gap-2 text-sm text-blue-400">
                <span>Next.js</span>
                <span>· Tailwind</span>
                <span>· Vercel</span>
                <span>· GitHub</span>
              </div>
            </div>

            {/* E-Book Reader */}
            <div className="p-7 rounded-2xl border border-gray-700 bg-white/5 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-3">
                E-Book Reader
              </h3>

              <p className="text-gray-400 mb-5 leading-relaxed">
                A Python-based e-book reader integrating APIs for fetching content
                and providing a smooth reading experience.
              </p>

              <div className="flex flex-wrap gap-2 text-sm text-blue-400">
                <span>Python</span>
                <span>· APIs</span>
                <span>· File Handling</span>
              </div>
            </div>

            {/* TripTrack */}
            <div className="p-7 rounded-2xl border border-gray-700 bg-white/5 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-3">
                TripTrack – Travel Management System
              </h3>

              <p className="text-gray-400 mb-5 leading-relaxed">
                A travel trip management system designed to organize itineraries,
                manage trips, and store user travel data efficiently.
              </p>

              <div className="flex flex-wrap gap-2 text-sm text-blue-400">
                <span>Python</span>
                <span>· APIs</span>
                <span>· Database</span>
              </div>
            </div>

          </div>
        </section>
        {/* ================= EXPERIENCE ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>

        <div className="max-w-3xl space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              Full Stack Developer – Projects & Freelance
            </h3>
            <p className="text-gray-400 mt-2">
              Built production-ready applications with focus on scalability,
              performance and clean architecture.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">Contact</h2>
        <p className="text-gray-300 mb-8 text-lg">
          Let’s connect and discuss opportunities.
        </p>

        <div className="flex flex-wrap gap-5">
          <Link
            href="mailto:your.email@example.com"
            className="px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
          >
            Email Me
          </Link>

          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="px-8 py-3 rounded-xl border border-gray-600 hover:border-white transition"
          >
            GitHub
          </Link>
        </div>
      </section>
    </main>
  );
}
