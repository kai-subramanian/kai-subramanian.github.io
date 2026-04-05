import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-10 md:pb-24 bg-slate-950 overflow-hidden text-white">
      {/* Glow */}
      <div className="absolute -bottom-25 -right-25 w-100 h-100 bg-lime-600 opacity-50 blur-3xl rounded-full animate-[blob_6s_ease-in-out_infinite] pointer-events-none"></div>

      {/* Navbar */}
      <nav className="w-full flex justify-center mt-6 relative z-20">
        <div
          className={`w-[90%] max-w-6xl bg-white/10 backdrop-blur-md border border-teal-600/20 px-4 py-3 transition-all duration-300 ${
            menuOpen ? "rounded-2xl" : "rounded-2xl"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <div className="flex items-center justify-center">
                <div className="p-1 rounded-2xl backdrop-blur-xl bg-lime-600/50 border border-teal-500/20">
                  <div className="p-1 text-xl text-gray-300 font-stretch-expanded font-sans font-light">
                    Kailash
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 text-sm text-gray-300">
              <span className="hover:text-white transition cursor-pointer">
                Home
              </span>
              <span className="hover:text-white transition cursor-pointer">
                About
              </span>
              <span className="hover:text-white transition cursor-pointer">
                Projects
              </span>
              <span className="hover:text-white transition cursor-pointer">
                Contact
              </span>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`block w-6 h-[2px] bg-white transition ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-white transition ${menuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-white transition ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              menuOpen ? "max-h-60 mt-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-4 text-gray-300 hover:text-lime-500 text-sm">
              <span className="hover:text-lime-600 cursor-pointer">Home</span>
              <span className="hover:text-lime-600 cursor-pointer">About</span>
              <span className="hover:text-lime-600 cursor-pointer">Projects</span>
              <span className="hover:text-lime-600 cursor-pointer">Contact</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="grid grid-rows-2 gap-24">
        <div className="px-10"><Hero /></div>
        <div className="py-18">
          <div className="absolute -left-25 w-100 h-100 bg-lime-600 opacity-50 blur-3xl rounded-full animate-[blob_6s_ease-in-out_infinite] pointer-events-none"></div>
          <About/>
        </div>
        <div className="absolute -left-25 w-100 h-100 bg-lime-600 opacity-50 blur-3xl rounded-full animate-[blob_6s_ease-in-out_infinite] pointer-events-none"></div>
        <div className=""><TechStack/></div>
      </div>
    </div>
  );
}

export default App;
