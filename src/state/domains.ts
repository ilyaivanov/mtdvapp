import { Domain } from "../types";

const createLevels = (skillId: string) => [
  {
    id: skillId + "1",
    title: "Junior",
    description: `Learn and apply 34 basic practices on a side project:
- TDD
- Pair Programming
- Fast iterations (1 PR per day)`
  },
  {
    id: skillId + "2",
    title: "Middle",
    description: "Learn and apply 3 basic practices on your work project"
  },
  {
    id: skillId + "3",
    title: "Senior",

    description: "Introduce your team to 3 basic practices"
  },
  {
    id: skillId + "4",
    title: "Lead",
    description: "Teach 3 practices to people not on your project"
  }
];

const result: Domain[] = [
  {
    id: "1",
    title: "Engineering",
    skills: [
      { id: "1", title: "Craftsmanship", levels: createLevels("1") },
      { id: "2", title: "Estimations", levels: createLevels("2") },
      { id: "3", title: "Open Source", levels: createLevels("3") }
    ],
    color: "#FBDEC2"
  },
  {
    id: "2",
    title: "Career & Business",
    skills: [
      { id: "4", title: "Craftsmanship", levels: createLevels("4") },
      { id: "5", title: "Estimations", levels: createLevels("5") },
      { id: "6", title: "Open Source", levels: createLevels("6") }
    ],
    color: "#F0F0F0"
  },
  {
    id: "3",
    title: "Universal",
    skills: [
      { id: "7", title: "Craftsmanship", levels: createLevels("7") },
      { id: "8", title: "Estimations", levels: createLevels("8") },
      { id: "9", title: "Open Source", levels: createLevels("9") }
    ],
    color: "#E1E0FF"
  }
];

export default result;
