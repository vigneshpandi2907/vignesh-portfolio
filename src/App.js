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
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
