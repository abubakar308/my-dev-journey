import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero";
import Timelines from "../components/Timelines";

export default function Home() {
  return (
    <div className="text-red-500 text-2xl">
      <Hero />
      <AboutMe />
      <Timelines />
    </div>
  )
}
