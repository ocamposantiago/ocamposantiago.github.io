import "./index.css";

import React, { useState } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ProjectDisplay from "./components/ProjectDisplay";
import Projects from "./components/Projects";
import type { ProjectsData } from "./projectsData";
import { projectsData } from "./projectsData";

function App() {
  const [selectedProject, setSelectedProject] = useState<
    ProjectsData | undefined
  >(undefined);

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
