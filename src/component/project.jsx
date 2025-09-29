import { useContext, useEffect, useRef, useState } from "react";
import { Modecontext } from "./contextmode";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

function Project() {
  const { mode } = useContext(Modecontext);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

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

  const projects = [
    { img: project1, alt: "Project 1", url: "https://samadhannursinghome.co.in/", title: "Health Care Website" },
    { img: project2, alt: "Project 2", url: "https://faydabazzar.in/", title: "E-Commerce Website" },
    { img: project3, alt: "Project 3", url: "https://sangamdetective.com/", title: "Private Investigation Website" },
    { img: project4, alt: "Project 4", url: "https://pranavtravelagency.com/", title: "Car Travel Website" },
    { img: project5, alt: "Project 5", url: "https://gajmohiniparisar.in/", title: "Real Estate Website" },
    { img: project6, alt: "Project 6", url: "http://www.rashmineurohospital.in/", title: "Health Care Website" },
  ];

  return (
    <div className={`${mode ? "bg-white" : "bg-gray-900"} py-5`} id="Project" ref={ref}>
      <div className="mx-auto w-[90%]">
        <h2
          className={`font-bold pt-2 text-4xl underline text-center font-serif transition-all duration-1000 transform ${
            visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } ${mode ? "text-blue-950" : "text-blue-400"}`}
        >
          Project
        </h2>
        <p
          className={`text-center pt-2 text-gray-500 transition-all duration-1000 transform ${
            visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          “Building Websites That Users Love.”
        </p>

        <div className="flex flex-wrap justify-around mt-5 gap-5">
          {projects.map((item, index) => (
            <div
              key={index}
              className={`md:w-[350px] w-full transition-all duration-1000 transform ${
                visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
            >
              <figure className="relative bg-gray-200 p-3 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 overflow-hidden">
                {/* Main Image */}
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
                />

                {/* Overlay + Icon */}
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gray-800/30 opacity-0 transition-opacity duration-500 hover:opacity-100">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center text-2xl bg-blue-600 rounded-full text-white transition-transform duration-500 hover:scale-125"
                  >
                    <i className="fa-solid fa-square-arrow-up-right"></i>
                  </a>
                </div>
              </figure>
              <p className={`hover:text-blue-700 p-2 font-serif text-center ${mode ? "text-black" : "text-white"}`}>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
