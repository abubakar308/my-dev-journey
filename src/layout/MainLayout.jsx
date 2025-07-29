import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
        <header>
        <Navbar />
        </header>
        <main>
        <Outlet />
        </main>

        <footer>
           <Footer />
        </footer>
    </div>
  )
}
