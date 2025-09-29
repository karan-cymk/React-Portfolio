import { useContext, useEffect, useRef, useState } from "react";
import { Modecontext } from "./contextmode";
import aboutImage from "../assets/image10.png";
import bannerImage from "../assets/image111.png";

function About() {
  let { mode } = useContext(Modecontext);
  let ref = useRef(null);
  let [visible, setVisible] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        let entry = entries[0];
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`py-5 ${mode ? "bg-white" : "bg-gray-900"}`}
      ref={ref}
      id="About"
    >
      <div className="mx-auto w-[90%] overflow-hidden">
        <h2
          className={`font-bold pt-5 text-4xl underline text-center font-serif transition-all duration-[2000ms] ease-out transform ${
            visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } ${mode ? "text-blue-950" : "text-blue-400"}`}
        >
          About
        </h2>
        <p
          className={`text-center pt-3 text-gray-500 transition-all duration-[2000ms] ease-out transform ${
            visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          “Where Creativity Meets Code.”
        </p>

        <div className="md:flex justify-center items-center gap-10 mt-10">
          {/* Left Image */}
          <div
            className={`basis-1/2 transition-all duration-[2000ms] ease-out transform ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <img
              src={aboutImage}
              alt="Developer illustration"
              className="w-full"
            />
          </div>

          {/* Right Content */}
          <div
            className={`basis-1/2 md:mt-0 mt-5 transition-all duration-[2000ms] ease-out transform ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <p
              className={`text-center font-bold py-5 ${
                mode ? "text-gray-700" : "text-gray-300"
              }`}
            >
              “I’m a passionate Web Developer specializing in building modern,
              responsive, and user-friendly websites. I enjoy turning complex
              problems into simple, beautiful, and intuitive designs. My focus
              is on creating digital experiences that are not only functional
              but also delightful to use. Whether it’s a sleek landing page, a
              full-stack application, or a custom dashboard, I aim to deliver
              high-quality work that makes an impact.”
            </p>
            <div className="py-5">
              <img
                src={bannerImage}
                alt="About section banner"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
