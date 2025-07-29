import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="bg-blue-50 py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-4">Welcome to My Dev Journey</h2>
      <p className="text-lg text-gray-600 mb-6">I’m a MERN Stack Developer building cool web apps with passion!</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Explore More
      </button>
    </section>
  )
}
