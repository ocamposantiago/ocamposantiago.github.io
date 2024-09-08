import { useState } from "react";
import "./index.css";

const projectsData = [
  { pName: "NIKE", description: "Nike Project", photos: "./" },
  {
    pName: "TELEFONICA",
    description: "Telefonica project",
    photos: "images/telefonica_",
  },
  {
    pName: "ENACOM",
    description: "encaom VR experience",
    photos: "images/enacom_",
  },
  {
    pName: "FORD",
    description: "Ford internal projects",
    photos: "images/ford_",
  },
  {
    pName: "PERSONAL",
    description: "Personal works",
    photos: "images/persona_",
  },
];

// const projectsName = projectsData.map((item) => item.pName);
//const projectsDesc = projectsData.map((item) => item.description);

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleProjectClick = (projectName) => {
    const project = projectsData.find((p) => p.pName === projectName);
    setSelectedProject(project);
  };
  // Function to handle closing the project display
  const handleCloseProjectDisplay = () => {
    setSelectedProject(null);
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
          onClose={handleCloseProjectDisplay}
        />
      )}
      <About />
      <Contact />
    </div>
  );
}
function Home() {
  return (
    <div className="container">
      <div className="menubar">
        <p>Based in Buenos Aires, Argentina</p>
        <p>3D Generalist, Artist & Professor</p>
        <p className="name">Santiago Ocampo</p>
        <p className="topMenu">Projects, About, Contact</p>
      </div>
      <div className="menu">
        <h1>PROJECTS.</h1>
        <h1>ABOUT.</h1>
        <h1>CONTACT.</h1>
        <div className="menuphoto">
          <span className="spacer"></span>
          <span className="spacer"></span>
          <span className="spacer"></span>
          <img src="images/portfolio_photo.png" alt="Profile Pic" />
        </div>
      </div>
    </div>
  );
}
function Projects({ name, onProjectClick }) {
  return (
    <div className="container">
      <div className="landingProjects">
        <p>001</p>
        <p>Projects</p>
        <div className="projectsMenus">
          {name.map((projectName) => (
            <h1 key={projectName} onClick={() => onProjectClick(projectName)}>
              {projectName}
            </h1>
          ))}
          {/* <h1>{name[0]}</h1>
          <h1>{name[1]}</h1>
          <h1>{name[2]}</h1>
          <h1>{name[3]}</h1>
          <h1>{name[4]}</h1> */}
        </div>
        <div className="projectsYear">
          <h1>2017</h1>
          <div className="line"></div>
          <h1>2019</h1>
          <div className="line"></div>
          <h1>2023</h1>
          <div className="line"></div>
          <h1>2024</h1>
          <div className="line"></div>
          <h1>Present</h1>
        </div>
      </div>
      <div className="projectFooter">
        <span className="spacer"></span>
        <span className="spacer"></span>
        <p>
          Services I provide: 3D Design and Rendering, Interactive
          Installations, WebGL Interactivity, WebXR Experiences, Mixed Reality
          Experiences.
        </p>
        <p>
          3D: Animation, Modeling, Rendering, Motion Tracking, VFX, VR Sculpting
        </p>
        <p>
          2D: Digital Painting, Concept Art, Motion Graphics, Visuals for Live
          Performance
        </p>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="container">
      <div className="landingAbout">
        <p>002</p>
        <p>About</p>
        <span className="bio">
          Santiago Ocampo is a Professor of Fine Arts and Programmer,
          specialized in drawing and self-taught in the use of technology. My
          work involves the use of analogue knowledge and the use of new media
          to express my vision through digital pieces, in which the use of
          color, lighting and animation are combined.
        </span>
        <h1 className="bioEnjoy">
          I ENJOY: GAMING, MUSIC, RESEARCHING, LEARNING NEW SKILLS, 3D PRINTING
        </h1>
        {/* <iframe
          src="https://my.spline.design/untitled-e3fbad4906352c5a176c4b0e2913680e/"
          frameborder="0"
          width="80%"
          height="30%"
          title="ProfilePic"
        ></iframe> */}
        <div className="tools">
          <p>Software & Tools:</p>
          <p>Blender 4.X</p>
          <p>Unreal Engine 5.X</p>
          <p>Touchdesigner</p>
          <p>Cables.GL</p>
          <p>Substance 3D Modeler</p>
          <p>Figma</p>
          <p>Resolume Arena</p>
        </div>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div className="container">
      <div className="landingContact">
        <p>003</p>
        <p>Contact</p>
        <div className="message">
          <p>Want to work together?</p>
          <p>Send me a message</p>
          <div className="mail">
            <h1>SANTIAGO.OCAMPOMAIL@GMAIL.COM</h1>
          </div>
          <div className="contactFooter">
            <p>Santiago Ocampo 3D Generalist</p>
            <p>Instagram, Behance</p>
            <p className="designedBy">
              Design & Developmnet by Santiago Ocampo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function ProjectDisplay({ project, onClose }) {
  //const prjName = nike.pName;

  return (
    <div className="container">
      <div className="pDisplayTop">
        {/* <p>Back</p>
        <p>Next</p> */}
        <span className="spacer"></span>
        <span className="spacer"></span>
        <span className="spacer"></span>
        <span className="spacer"></span>
        <p className="closeButton" onClick={onClose}>
          X Close
        </p>
      </div>
      <div className="pDisplayTitle">
        <div className="line"></div>
        <h1>{project.pName}</h1>
        <div className="line"></div>
      </div>
      <div className="pDisplayInfo">
        <p>{project.description}</p>
        <div className="galleryPhoto">
          <img alt="photos" src={project.photos + `${1}.png`} />
        </div>
        <span className="spacer"></span>
        <p className="back">Back</p>
        <span className="spacer"></span>
        <span className="spacer"></span>
        <p className="next">Next</p>
      </div>
    </div>
  );
}
export default App;
