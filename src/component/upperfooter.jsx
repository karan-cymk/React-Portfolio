import { useContext } from "react";
import { Modecontext } from "./contextmode";

function Upperfooter() {
  const { mode } = useContext(Modecontext);

  return (
    <div className={`border-y border-gray-500 ${mode ? "bg-white" : "bg-gray-900"}`}>
      <div className="mx-auto w-[90%] py-4">
        <div className="md:flex items-center justify-between">
          {/* Title */}
          <div className="md:flex-1 text-center md:text-left mb-3 md:mb-0">
            <h2 className={`font-bold text-2xl ${mode ? "text-black" : "text-gray-500"}`}>
              Stay in Touch
            </h2>
          </div>

          {/* Social Links */}
          <div className="md:flex-1 flex justify-center md:justify-end gap-4">
            <a
              href="https://www.linkedin.com/in/karan-sahu-082407290"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-blue-800 hover:text-blue-600 transition"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/karan___sahu____/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-red-800 hover:text-red-600 transition"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://github.com/karan-cymk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-gray-500 transition"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="mailto:karansahu.0508@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-cyan-900 hover:text-cyan-700 transition"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upperfooter;
