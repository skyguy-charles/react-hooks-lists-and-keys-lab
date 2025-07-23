// App.js
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ProjectList from "./components/ProjectList";

const user = {
  name: "Charles Mwangi",
  city: "Nairobi",
  bio: "Full-stack developer passionate about building financial tools.",
  links: {
    github: "https://github.com/charlesmwangi",
    linkedin: "https://linkedin.com/in/charlesmwangi"
  }
};

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    about: "A personal site to showcase my work",
    technologies: ["React", "CSS", "JavaScript"]
  },
  {
    id: 2,
    name: "Budget Tracker",
    about: "Track expenses and manage savings goals",
    technologies: ["React", "Node.js", "Express"]
  },
  {
    id: 3,
    name: "Weather App",
    about: "Get real-time weather updates",
    technologies: ["HTML", "CSS", "API"]
  }
];
function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
