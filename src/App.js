import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
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
      <SocialLinks />
    </div>
  );
}

export default App;
