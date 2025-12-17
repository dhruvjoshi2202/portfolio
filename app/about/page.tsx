export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b0d12] text-white pt-24 pb-12 px-5 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-14 sm:space-y-16">

        {/* ================= INTRO ================= */}
        <section className="grid gap-10 md:grid-cols-2 md:gap-14 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              About <span className="text-blue-500">Me</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
              I’m <span className="text-white font-semibold">Dhruv Joshi</span>, a{" "}
              <span className="text-blue-400">Full Stack Developer</span> focused
              on building scalable, high-performance, real-world web
              applications.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              My journey began with curiosity about how modern web applications
              work. Over time, this curiosity turned into hands-on experience
              with frontend and backend technologies.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              I believe in writing clean, maintainable code and designing systems
              that are easy to scale, secure, and optimized for performance.
            </p>
          </div>

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { value: "1+", label: "Years Experience" },
              { value: "10+", label: "Projects Built" },
              { value: "5+", label: "Core Technologies" },
              { value: "100%", label: "Commitment" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white/5 border border-gray-700 p-5 sm:p-6"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">
                  {item.value}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= APPROACH ================= */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            My <span className="text-blue-500">Approach</span>
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Problem Solving",
                desc: "Breaking complex problems into simple, logical solutions.",
              },
              {
                title: "Clean Code",
                desc: "Readable, maintainable, and scalable architecture.",
              },
              {
                title: "Performance",
                desc: "Optimized applications for speed and real-world usage.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-700 bg-white/5 p-5 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= TECH STACK ================= */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-5">
            Technologies <span className="text-blue-500">I Use</span>
          </h2>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "Next.js",
              "React",
              "Node.js",
              "MongoDB",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
              "REST APIs",
              "Git & GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-2 rounded-lg border border-gray-700
                text-xs sm:text-sm text-gray-300 hover:border-blue-500 hover:text-white transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ================= CLOSING ================= */}
        <section className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Why <span className="text-blue-500">Me?</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            I continuously learn and improve my skills to stay aligned with
            industry standards. My goal is to contribute to meaningful projects,
            collaborate with strong teams, and build software that delivers real
            value.
          </p>
        </section>

      </div>
    </main>
  );
}
