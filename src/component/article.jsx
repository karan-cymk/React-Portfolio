import { useContext, useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { Modecontext } from "./contextmode";
import { Link } from "react-router-dom";
import lightImage from "../assets/image1.png";
import darkImage from "../assets/image2.png";
import mypdf from "../pdf/Karan_Sahu_Frontend_React_js_Developer_Resumes.pdf"

function NameAnimation() {
  const { mode } = useContext(Modecontext);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`mt-0.5 py-10 ${mode ? "bg-white" : "bg-gray-900"}`}
      id="home"
      ref={ref}
    >
      <div className="mx-auto w-[90%] overflow-x-hidden">
        <div className="md:flex items-center gap-6">
          {/* Image Side */}
          <div
            className={`md:basis-1/2 transition-all duration-2000 ease-out transform ${
              visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            <figure>
              <img
                src={mode ? lightImage : darkImage}
                alt="Portrait of Karan Sahu"
                className="my-2 md:w-full w-[90%] rounded-lg"
              />
            </figure>
          </div>

          {/* Text Side */}
          <div
            className={`md:basis-1/2 transition-all duration-2000 ease-out transform delay-300 ${
              visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <h2
              className={`text-center font-bold md:text-4xl text-3xl ${
                mode ? "text-black" : "text-white"
              }`}
            >
              Hi, I am <span className="text-amber-600">KARAN SAHU</span>
            </h2>

            <div
              className={`text-center pt-4 md:text-4xl text-3xl font-bold ${
                mode ? "text-black" : "text-white"
              }`}
            >
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  " Web Developer",
                  1500,
                  " Frontend Developer",
                  1500,
                  " React Js Developer",
                  1500,
                  " Full Stack Developer",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="ml-2 text-cyan-400"
              />
            </div>

            <p
              className={`text-center text-xl pt-5 font-medium ${
                mode ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Expertise in HTML, CSS, React.js, Tailwind CSS, JavaScript, and API
              integration with a strong focus on performance and clean code.
            </p>

            <div className="text-center pt-7 flex justify-center gap-6 flex-wrap">
              <a
                href={mypdf}
                download
                className="text-white bg-blue-600 font-bold px-4 py-2 rounded-2xl hover:bg-blue-700 transition flex items-center gap-2"
              >
                Download CV <i className="fa-solid fa-download"></i>
              </a>

              <Link
                to="/contact"
                className="text-white bg-blue-600 font-bold px-4 py-2 rounded-2xl hover:bg-blue-700 transition flex items-center gap-2"
              >
                Contact Me <i className="fa-solid fa-location-arrow"></i>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-6 text-2xl">
              <a
                href="https://www.instagram.com/karan___sahu____/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-800 text-4xl hover:scale-110 transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/karan-sahu-082407290"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 text-4xl hover:scale-110 transition"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/karan-cymk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl hover:scale-110 transition"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="mailto:karansahu.0508@gmail.com"
                className="text-cyan-900 text-4xl hover:scale-110 transition"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameAnimation;
