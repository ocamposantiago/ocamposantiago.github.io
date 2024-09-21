export type ProjectsData = {
  pName: string;
  description: string;
  photos: string;
  amount: number;
};

export const projectsData: ProjectsData[] = [
  {
    pName: "NIKE",
    description: "Nike Project",
    photos: "",
    amount: 0,
  },
  {
    pName: "TELEFONICA",
    description: "Telefonica project",
    photos: "images/telefonica_",
    amount: 0,
  },
  {
    pName: "ENACOM",
    description: "encaom VR experience",
    photos: "images/enacom_",
    amount: 2,
  },
  {
    pName: "FORD",
    description: "Ford internal projects",
    photos: "images/fordvr_",
    amount: 2,
  },
  {
    pName: "PERSONAL",
    description: "Personal works",
    photos: "images/persona_",
    amount: 0,
  },
];
