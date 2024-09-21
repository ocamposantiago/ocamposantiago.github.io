import React from "react";
import { useState } from "react";
import "./index.css";
import { projectsData } from "./projectsData";
import type { ProjectsData } from "./projectsData";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectDisplay from "./components/ProjectDisplay";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectsData | undefined>(undefined);
  
  const handleProjectClick = (projectName: string) => {
    const project = projectsData.find((p) => p.pName === projectName);
    setSelectedProject(project);
  };
  
  return (
    <div className="App">
      <Home />
      {!selectedProject && (
        <Projects
          name={projectsData.map((item) => item.pName)}
          onProjectClick={handleProjectClick}
        />
      )}
      {selectedProject && (
        <ProjectDisplay
          project={selectedProject}
          onClose={() => setSelectedProject(undefined)}
        />
      )}
      <About />
      <Contact />
    </div>
  );
}

export default App;
