import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image44 from "../assets/image44.png"; // Import the image

function Letgo() {
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
    <section className="bg-yellow-900 overflow-x-hidden py-10" ref={ref}>
      <div className="mx-auto w-[90%] flex flex-col md:flex-row justify-center items-center gap-8">
        
        {/* Left Section */}
        <div
          className={`md:w-2/3 w-full transition-all duration-1000 transform ${
            visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <h2 className="text-3xl text-white font-bold">Ready to Start Your Project?</h2>
          <h2 className="text-3xl text-white font-bold pb-3">Let's Talk</h2>
          <p className="pb-5 text-white">
            I’d love to hear about your project and how I can help. Get in touch with me today, and let’s create something extraordinary.
          </p>
          <Link
            to="/contact"
            className="bg-blue-800 text-white px-5 py-2 rounded-full text-md font-bold inline-flex items-center gap-2 hover:bg-blue-700 transition"
          >
            Let's Go <i className="fa-solid fa-location-arrow"></i>
          </Link>
        </div>

        {/* Right Section */}
        <div
          className={`md:w-1/3 w-full flex justify-center md:justify-end transition-all duration-1000 transform ${
            visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <img
            src={image44} // Use imported image
            alt="Project discussion illustration"
            className="w-[270px] md:w-full"
          />
        </div>

      </div>
    </section>
  );
}

export default Letgo;
