
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">MyDevJourney</h1>
      <ul className="flex space-x-4">
        <li><a href="#hero" className="text-gray-700 hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="text-gray-700 hover:text-blue-500">About</a></li>
        <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  )
}
