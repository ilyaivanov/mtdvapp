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

export default [
  {
    title: "Engineering",
    skills: [
      {
        title: "Craftsmanship",
        levels: createLevels()
      },
      { title: "Estimations", levels: createLevels() },
      { title: "Open Source", levels: createLevels() }
    ],
    color: "#FBDEC2"
  },
  {
    title: "Career & Business",
    skills: [
      { title: "Craftsmanship", level: "junior" },
      { title: "Estimations", level: "middle" },
      { title: "Open Source", level: "lead" }
    ],
    color: "#F0F0F0"
  },
  {
    title: "Universal",
    skills: [
      { title: "Craftsmanship", level: "junior" },
      { title: "Estimations", level: "middle" },
      { title: "Open Source", level: "lead" }
    ],
    color: "#E1E0FF"
  }
];
