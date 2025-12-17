import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0d12] text-white pt-24 pb-12 px-5 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* ===== HEADER ===== */}
        <section className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Get In <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Have a project, opportunity, or idea in mind?  
            Let’s connect and build something meaningful together.
          </p>
        </section>

        {/* ===== CONTENT ===== */}
        <section className="grid gap-12 md:grid-cols-2">

          {/* Left Info */}
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed">
              I’m always open to discussing new projects, freelance work,
              internships, or full-time opportunities.  
              Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <Link
                  href="mailto:your.email@example.com"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  your.email@example.com
                </Link>
              </div>

              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  github.com/yourusername
                </Link>
              </div>

              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  linkedin.com/in/yourusername
                </Link>
              </div>
            </div>
          </div>

          {/* Right Form (UI Only) */}
          <div className="rounded-2xl border border-gray-700 bg-white/5 p-6">
            <form className="space-y-5">
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg bg-black border border-gray-700
                  px-4 py-3 text-sm text-white focus:outline-none
                  focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg bg-black border border-gray-700
                  px-4 py-3 text-sm text-white focus:outline-none
                  focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-lg bg-black border border-gray-700
                  px-4 py-3 text-sm text-white focus:outline-none
                  focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-blue-500 py-3
                font-medium hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </section>

        {/* ===== FOOTER TEXT ===== */}
        <section className="max-w-3xl">
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            I typically respond within 24 hours.  
            Looking forward to connecting with you.
          </p>
        </section>

      </div>
    </main>
  );
}
