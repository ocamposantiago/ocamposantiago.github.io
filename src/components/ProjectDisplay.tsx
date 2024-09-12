import type { ProjectsData } from "../projectsData";

function ProjectDisplay({ project, onClose }: { project: ProjectsData, onClose: () => void}) {
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
          <img alt="photos" src={`${process.env.PUBLIC_URL}/` + project.photos + `${1}.png`} />
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

export default ProjectDisplay