import React from 'react'

const timelineData = [
  {
    date: "April 2022",
    title: "Started B.Sc at City University, Bangladesh",
    description: "Got admitted and learned C and Java in the 2nd semester.",
  },
  {
    date: "2023",
    title: "Started Web Development Basics",
    description: "Learned HTML & CSS from YouTube. Built 2-4 small projects.",
  },
  {
    date: "July 2024",
    title: "Enrolled in Programming Hero Course",
    description: "Mastered Git, GitHub, HTML, CSS, Tailwind CSS easily.",
  },
  {
    date: "Late 2024",
    title: "Learned JavaScript & Built Projects",
    description: "Struggled a bit with JS but enjoyed building things like Todo App.",
  },
  {
    date: "Early 2025",
    title: "React.js & MERN Stack Journey",
    description: "Faced challenges in React & MongoDB, but overcame with practice.",
  },
];


export default function Timelines() {
  return (
   <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">My Dev Journey</h2>
      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500">{item.date}</p>
            <p className="mt-2 text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
