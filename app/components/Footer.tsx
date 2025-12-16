import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 body-font">
  <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between">
    <p className="text-sm text-gray-500 sm:text-center">
      © 2025 Dhruv Joshi — All Rights Reserved
    </p>
    <span className="inline-flex mt-4 md:mt-0 justify-center md:justify-start space-x-4">
      <a href="https://github.com/yourusername" className="text-gray-500 hover:text-gray-900 transition-colors" target="_blank">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.37 7.86 10.88.57.11.78-.25.78-.55 0-.27-.01-1-.02-1.95-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.14 1.18a10.88 10.88 0 012.86-.38c.97.01 1.95.13 2.86.38 2.17-1.49 3.13-1.18 3.13-1.18.62 1.6.23 2.78.11 3.07.73.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.41-5.27 5.7.41.36.77 1.08.77 2.18 0 1.57-.01 2.84-.01 3.23 0 .3.21.66.79.55A11.51 11.51 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z"></path>
        </svg>
      </a>

      <a href="https://linkedin.com/in/yourusername" className="text-gray-500 hover:text-gray-900 transition-colors" target="_blank">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.788-1.75-1.758s.784-1.757 1.75-1.757 1.75.787 1.75 1.757-.784 1.758-1.75 1.758zm13.5 11.268h-3v-5.604c0-1.337-.026-3.064-1.867-3.064-1.869 0-2.154 1.459-2.154 2.968v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.841-1.562 3.036 0 3.6 2.0 3.6 4.599v5.596z"/>
        </svg>
      </a>

      <a href="https://twitter.com/yourusername" className="text-gray-500 hover:text-gray-900 transition-colors" target="_blank">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.918 4.918 0 00-8.379 4.482c-4.086-.205-7.713-2.165-10.141-5.144a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.919 4.919 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.93 4.93 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.396 0-.788-.023-1.175-.068a13.945 13.945 0 007.548 2.212c9.056 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636a10.012 10.012 0 002.459-2.548l.002-.003z"/>
        </svg>
      </a>
    </span>

  </div>
</footer>

  )
}

export default Footer