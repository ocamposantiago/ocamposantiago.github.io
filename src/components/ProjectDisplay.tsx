import { useEffect, useState } from "react";
import type { ProjectsData } from "../projectsData";

function ProjectDisplay({ project, onClose }: { project: ProjectsData, onClose: () => void}) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log({counter});
  })

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
          <img alt="photos" src={`${process.env.PUBLIC_URL}/` + project.photos + `${counter}.png`} />
        </div>
        <span className="spacer"></span>
        <p className="back" onClick={() => {
          setCounter(counter => counter - 1 < 0 ? project.amount - 1 : counter - 1)
        }}>Back</p>
        <span className="spacer"></span>
        <span className="spacer"></span>
        <p className="next" onClick={() => 
          setCounter(counter => counter + 1 >= project.amount ? 0 : counter + 1)
        }>Next</p>
      </div>
    </div>
  );
}

export default ProjectDisplay