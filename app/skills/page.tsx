export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#0b0d12] text-white pt-24 pb-12 px-5 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* ===== HEADER ===== */}
        <section className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            My <span className="text-blue-500">Skills</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            A focused set of technologies and tools I use to build scalable,
            performant, and production-ready applications.
          </p>
        </section>

        {/* ===== SKILL CATEGORIES ===== */}
        <section className="grid gap-10 md:grid-cols-2">

          {/* Frontend */}
          <div className="rounded-2xl border border-gray-700 bg-white/5 p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
              Frontend
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "React",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "HTML5",
                "CSS3",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg border border-gray-700
                  text-sm text-gray-300 hover:border-blue-500 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-gray-700 bg-white/5 p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
              Backend
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "Node.js",
                "Express.js",
                "REST APIs",
                "MongoDB",
                "Mongoose",
                "Authentication",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg border border-gray-700
                  text-sm text-gray-300 hover:border-blue-500 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-2xl border border-gray-700 bg-white/5 p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
              Tools & Workflow
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "Git",
                "GitHub",
                "VS Code",
                "Postman",
                "npm",
                "Vercel",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg border border-gray-700
                  text-sm text-gray-300 hover:border-blue-500 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Practices */}
          <div className="rounded-2xl border border-gray-700 bg-white/5 p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
              Development Practices
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "Clean Code",
                "Responsive Design",
                "Performance Optimization",
                "Scalable Architecture",
                "Version Control",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg border border-gray-700
                  text-sm text-gray-300 hover:border-blue-500 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CLOSING ===== */}
        <section className="max-w-3xl">
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            I continuously upgrade my skill set to stay aligned with modern web
            standards and industry best practices, ensuring every project is
            fast, reliable, and scalable.
          </p>
        </section>

      </div>
    </main>
  );
}
