import { Domain } from "../types";

const createLevels = () => [
  {
    title: "Junior",
    description: `Learn and apply 34 basic practices on a side project:
- TDD
- Pair Programming
- Fast iterations (1 PR per day)`
  },
  {
    title: "Middle",
    description: "Learn and apply 3 basic practices on your work project"
  },
  {
    title: "Senior",

    description: "Introduce your team to 3 basic practices"
  },
  {
    title: "Lead",
    description: "Teach 3 practices to people not on your project"
  }
];

const result: Domain[] = [
  {
    id: "1",
    title: "Engineering",
    skills: [
      { id: "1", title: "Craftsmanship", levels: createLevels() },
      { id: "2", title: "Estimations", levels: createLevels() },
      { id: "3", title: "Open Source", levels: createLevels() }
    ],
    color: "#FBDEC2"
  },
  {
    id: "2",
    title: "Career & Business",
    skills: [
      { id: "4", title: "Craftsmanship", levels: createLevels() },
      { id: "5", title: "Estimations", levels: createLevels() },
      { id: "6", title: "Open Source", levels: createLevels() }
    ],
    color: "#F0F0F0"
  },
  {
    id: "3",
    title: "Universal",
    skills: [
      { id: "7", title: "Craftsmanship", levels: createLevels() },
      { id: "8", title: "Estimations", levels: createLevels() },
      { id: "9", title: "Open Source", levels: createLevels() }
    ],
    color: "#E1E0FF"
  }
];

export default result;
