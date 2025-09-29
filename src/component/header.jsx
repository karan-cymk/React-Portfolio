import { useContext, useState } from "react";
import { Modecontext } from "./contextmode";
import Nav from "./mobilenav";
import { Link } from "react-router-dom";
import logo from "../assets/K.png"; // Use imported logo for production

function Header() {
  const { mode, setmode } = useContext(Modecontext);
  const [active, setActive] = useState("Home");
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={`shadow-md sticky top-0 z-50 py-1 transition-colors duration-300 ${mode ? "bg-yellow-100 shadow-gray-200" : "bg-gray-900 shadow-gray-600"}`}>
      <div className="flex items-center justify-between px-4 md:px-10">
        
        {/* Logo */}
        <div className="w-[50px]">
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        {/* Dark/Light Toggle */}
        <div className="flex items-center gap-2">
          <i className={`fa-solid fa-lightbulb text-xl ${mode ? "text-yellow-300" : "text-gray-500"}`}></i>
          <div 
            onClick={() => setmode(!mode)}
            className={`w-11 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${mode ? "bg-gray-300" : "bg-gray-800"}`}
            aria-label="Toggle dark/light mode"
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${mode ? "translate-x-1" : "translate-x-5"}`}></div>
          </div>
          <i className={`fa-solid fa-moon text-xl ${mode ? "text-gray-500" : "text-white"}`}></i>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex gap-6 font-bold ${mode ? "text-black" : "text-white"}`}>
          {["Home", "About", "Service", "Project", "Skill"].map((item) => (
            <li key={item} onClick={() => setActive(item)} className={`${active === item ? "text-blue-800" : ""}`}>
              {item === "Home" ? <Link to="/">{item}</Link> : <a href={`#${item}`}>{item}</a>}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="bg-blue-600 px-3 py-1 rounded-2xl font-bold text-white hover:bg-blue-700 transition flex items-center gap-2">
            Contact <i className="fa-solid fa-location-arrow"></i>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className={`text-2xl font-bold ${mode ? "text-black" : "text-white"}`}
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle Mobile Menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden  bg-black/50 backdrop-blur-sm z-40 transition-transform duration-300 ${navOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Nav  />
      </div>
    </header>
  );
}

export default Header;
