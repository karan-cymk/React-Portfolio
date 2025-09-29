import { useContext } from "react";
import { Modecontext } from "./contextmode";
import { Link } from "react-router-dom";

function Nav() {
  const { mode } = useContext(Modecontext);

  return (
    <div
      className={`md:hidden fixed top-0 left-0 h-screen w-64 overflow-y-auto pb-10 transition-transform duration-300 ease-in-out ${
        mode ? "bg-yellow-200" : "bg-blue-950"
      }`}
    >
      {/* Navigation Links */}
      <ul className={`text-center py-10 space-y-4 ${mode ? "text-black" : "text-white"}`}>
        <li className="text-lg font-medium hover:text-blue-600 transition">
          <a href="#home">Home</a>
        </li>
        <li className="text-lg font-medium hover:text-blue-600 transition">
          <a href="#About">About</a>
        </li>
        <li className="text-lg font-medium hover:text-blue-600 transition">
          <a href="#Service">Service</a>
        </li>
        <li className="text-lg font-medium hover:text-blue-600 transition">
          <a href="#Project">Project</a>
        </li>
        <li className="text-lg font-medium hover:text-blue-600 transition">
          <a href="#Skill">Skills</a>
        </li>
      </ul>

      {/* Contact Button */}
      <div className="absolute bottom-10 w-full flex justify-center pb-10">
        <Link
          to="/contact"
          className="px-5 py-2 text-white bg-blue-500 rounded-2xl font-semibold hover:bg-blue-600 transition"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Nav;
