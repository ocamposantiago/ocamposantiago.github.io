import "./index.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      {/* <ProjectDisplay /> */}
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
          <img src="./portfolio_photo.png" alt="Profile Pic" />
        </div>
      </div>
    </div>
  );
}
function Projects() {
  return (
    <div className="container">
      <div className="landingProjects">
        <p>001</p>
        <p>Projects</p>
        <div className="projectsMenus">
          <h1>NIKE</h1>
          <h1>TELEFONICA</h1>
          <h1>ENACOM</h1>
          <h1>FORD</h1>
        </div>
        <div className="projectsYear">
          <h1>2017</h1>
          <div className="line"></div>
          <h1>2019</h1>
          <div className="line"></div>
          <h1>2023</h1>
          <div className="line"></div>
          <h1>2024</h1>
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
function ProjectDisplay() {
  return (
    <div className="container">
      <div className="pDisplayTop">
        {/* <p>Back</p>
        <p>Next</p> */}
        <span className="spacer"></span>
        <span className="spacer"></span>
        <span className="spacer"></span>
        <span className="spacer"></span>
        <p>X Close</p>
      </div>
      <div className="pDisplayTitle">
        <div className="line"></div>
        <h1>NIKE</h1>
        <div className="line"></div>
      </div>
      <div className="pDisplayInfo">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          pellentesque nibh tristique ex porta hendrerit. Vestibulum bibendum
          leo metus, id consectetur ipsum sagittis sit amet. In aliquet dui mi,
          et fringilla erat volutpat at. Phasellus vestibulum mollis justo.
          Donec in neque eu diam dictum vehicula eget at sem. Aenean porta, nisi
          eu auctor cursus, massa augue molestie elit, sit amet egestas ex magna
          ut augue. Curabitur gravida nulla ut fringilla hendrerit. Nullam
          sagittis congue turpis quis efficitur. Aenean a lorem sagittis,
          pharetra tortor id, scelerisque ipsum. Donec diam purus, tristique
          quis hendrerit non, imperdiet placerat dui. Mauris venenatis, libero
          vitae molestie tincidunt, nisl arcu egestas ligula, sed convallis
          mauris nibh eu nisi. Suspendisse lorem turpis, vulputate in nunc eu,
          faucibus malesuada purus.
        </p>
        <div className="galleryPhoto">
          <img alt="photos" />
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
