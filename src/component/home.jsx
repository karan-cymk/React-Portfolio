import NameAnimation from "./article";
import Service from "./service";
import About from "./about";
import Skills from "./skill";
import Project from "./project";
import Letgo from "./letsgo";

function Home() {
  return (
    <>
      <NameAnimation />
      <Service />
      <About />
      <Skills />
      <Project />
      <Letgo />
    </>
  );
}

export default Home;
