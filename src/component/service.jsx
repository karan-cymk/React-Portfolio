import { useContext, useEffect, useRef, useState } from "react";
import { Modecontext } from "./contextmode";
import bgImage from "../assets/image9.jpg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";
import image7 from "../assets/image7.svg";
import image8 from "../assets/image8.svg";

const services = [
  {
    img: image3,
    title: "Web Development",
    desc: "I build responsive, SEO-friendly, and high-performance websites using the latest technologies like React, Node.js, and TailwindCSS.",
  },
  {
    img: image4,
    title: "UI/UX Design",
    desc: "I design modern and user-friendly interfaces that provide smooth user experiences, focusing on clarity and usability.",
  },
  {
    img: image5,
    title: "Full-Stack Development",
    desc: "From frontend to backend, I create complete web applications with authentication, databases, and API integrations.",
  },
  {
    img: image6,
    title: "Responsive Design",
    desc: "I ensure that websites look and function perfectly across all devices — desktop, tablet, and mobile.",
  },
  {
    img: image7,
    title: "Performance Optimization",
    desc: "I optimize websites for speed, accessibility, and scalability, ensuring the best performance for end-users.",
  },
  {
    img: image8,
    title: "Maintenance & Support",
    desc: "I provide website updates, bug fixes, and ongoing support to keep your projects running smoothly.",
  },
];

function Service() {
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

  return (
    <section
      id="Service"
      ref={ref}
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`p-5 bg-cover bg-center bg-blend-multiply overflow-hidden ${
        mode ? "bg-white" : "bg-gray-900"
      }`}
    >
      <div className="mx-auto w-[90%] py-5">
        {/* Heading */}
        <h2
          className={`text-4xl font-bold underline text-center font-serif transition-all duration-1000 transform ${
            mode ? "text-blue-950" : "text-blue-400"
          } ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
        >
          Service
        </h2>
        <p
          className={`text-center font-serif pt-2 transition-all duration-1000 transform ${
            mode ? "text-gray-600" : "text-gray-300"
          } ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
        >
          "What I Can Do for You"
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-md p-6 transition-all duration-1000 transform ${
                visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              } ${mode ? "bg-gray-200 shadow-gray-600" : "bg-gray-700 shadow-gray-500"}`}
            >
              <figure className="flex flex-col items-center text-center">
                <img
                  src={service.img}
                  alt={`${service.title} icon`}
                  width="70"
                  height="70"
                  className="mb-4"
                />
                <figcaption
                  className={`font-bold text-lg ${mode ? "text-black" : "text-white"}`}
                >
                  {service.title}
                </figcaption>
                <figcaption
                  className={`mt-2 ${mode ? "text-gray-700" : "text-gray-300"}`}
                >
                  {service.desc}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
