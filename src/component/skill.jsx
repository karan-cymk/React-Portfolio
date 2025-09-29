import { useEffect, useState, useRef, useContext } from "react";
import { Modecontext } from "./contextmode";

import bgImage from "../assets/image9.jpg";
import skill1 from "../assets/skill1.png";
import skill2 from "../assets/skill2.png";
import skill3 from "../assets/skill3.png";
import skill4 from "../assets/skill4.png";
import skill5 from "../assets/skill5.png";
import skill6 from "../assets/skill6.png";
import skill7 from "../assets/skill7.svg";
import skill11 from "../assets/skill11.png";
import skill12 from "../assets/skill12.png";
import tool1 from "../assets/tool1.svg";
import tool2 from "../assets/tool2.svg";
import tool3 from "../assets/tool3.png";
import tool33 from "../assets/tool33.png";
import key1 from "../assets/key1.png";
import key2 from "../assets/key2.png";
import key3 from "../assets/key3.png";
import key4 from "../assets/key4.png";
import key5 from "../assets/key5.png";
import key6 from "../assets/key6.jpg";

// ---------------- Circular Progress ----------------
function CircularProgress({ value, color, label, img, index }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setTimeout(() => setProgress(value), 200 + index * 100);
        } else {
          setProgress(0);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, index]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transform transition-all duration-1000 ${
        progress ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <svg width="96" height="96" viewBox="0 0 144 144" className="relative">
        {/* Background circle */}
        <circle
          stroke="#e5e7eb"
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx="72"
          cy="72"
        />
        {/* Progress circle */}
        <circle
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="72"
          cy="72"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-1000 ease-out"
        />
        {/* Center image */}
        <image
          href={img}
          x="42"
          y="42"
          height="60"
          width="60"
          clipPath="circle(30px at 30px 30px)"
          alt={label}
        />
      </svg>
      <h3 className="text-lg font-semibold mt-2">{label}</h3>
    </div>
  );
}

// ---------------- Category Block ----------------
function CategoryBlock({ title, skills, mode }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`shadow-lg rounded-2xl py-5 mb-12 transform transition-all duration-1000 ${
        mode ? "bg-gray-200 shadow-gray-500" : "bg-gray-800 shadow-gray-700"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <h3
        className={`text-3xl font-semibold mb-3 text-center underline font-serif ${
          mode ? "text-black" : "text-gray-400"
        }`}
      >
        {title}
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        {skills.map((skill, idx) => (
          <CircularProgress key={idx} {...skill} index={idx} />
        ))}
      </div>
    </div>
  );
}

// ---------------- Skills Section ----------------
export default function Skills() {
  const { mode } = useContext(Modecontext);

  const categories = {
    Languages: [
      { value: 97, color: "blue", label: "HTML5", img: skill1 },
      { value: 95, color: "orange", label: "CSS3", img: skill2 },
      { value: 92, color: "green", label: "JavaScript", img: skill3 },
    ],
    Frameworks: [
      { value: 85, color: "cyan", label: "React.js", img: skill4 },
      { value: 90, color: "red", label: "Tailwind", img: skill5 },
      { value: 85, color: "blue", label: "Bootstrap", img: skill6 },
      { value: 70, color: "orange", label: "JQuery", img: skill7 },
      { value: 80, color: "teal", label: "Express.js", img: skill11 },
    ],
    Tools: [
      { value: 75, color: "purple", label: "Git", img: tool1 },
      { value: 65, color: "yellow", label: "Github", img: tool2 },
      { value: 90, color: "green", label: "VS Code", img: tool3 },
      { value: 85, color: "teal", label: "Email Js", img: tool33 },
    ],
    Database: [{ value: 70, color: "cyan", label: "MySQL", img: skill12 }],
    "Key Areas": [
      { value: 85, color: "teal", label: "UI/UX", img: key1 },
      { value: 90, color: "green", label: "Responsive Design", img: key2 },
      { value: 90, color: "purple", label: "API Integration", img: key3 },
      { value: 90, color: "yellow", label: "Routing", img: key4 },
      { value: 90, color: "red", label: "State Management", img: key5 },
      {
        value: 90,
        color: "cyan",
        label: "Component-Based Architecture",
        img: key6,
      },
    ],
  };

  return (
    <section
      id="Skill"
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`p-3 bg-cover bg-center bg-blend-multiply ${
        mode ? "bg-white" : "bg-gray-900"
      }`}
    >
      <div className="text-center mb-12">
        <h2
          className={`text-3xl font-bold underline ${
            mode ? "text-blue-950" : "text-blue-400"
          }`}
        >
          My Skills
        </h2>
        <p className="text-gray-500 pt-2">
          "Languages, Frameworks, Tools & Key Areas"
        </p>
      </div>

      {Object.entries(categories).map(([category, skills], idx) => (
        <CategoryBlock key={idx} title={category} skills={skills} mode={mode} />
      ))}
    </section>
  );
}
