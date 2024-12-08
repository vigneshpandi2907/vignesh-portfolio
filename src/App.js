import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Menu from "./components/Menu.js";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Hobbies />
      <Contact />
      <div className="hidden md:flex w-100">
      <Footer />
      </div>
      <SocialLinks />
      <div className="sticky bottom-0 md:hidden">
      <Menu/>
      </div>
    </div>
  );
}

export default App;
