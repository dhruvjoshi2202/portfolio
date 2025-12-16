import React from 'react'

const page = () => {
  return (

    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Contact Me</h2>
        <p className="text-gray-600 mb-8">
          I’m available for work or collaboration. Feel free to reach out to me using the form below or via email/phone.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Email</h3>
            <p className="text-gray-600">dhruvjoshi222000@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
            <p className="text-gray-600">+91 7986400977</p>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}


export default page