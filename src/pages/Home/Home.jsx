import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
