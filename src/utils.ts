import { Skill } from "./App";

const mapItemsBefore = (array, index, map) => {
  const skillsBefore = array.slice(0, index + 1).map(map);
  return [...skillsBefore, ...array.slice(index + 1)];
};
const mapItemsAfter = (array, index, map) => {
  const skillsAfter = array.slice(index).map(map);
  return [...array.slice(0, index), ...skillsAfter];
};

export const toggleSkill = (skills: Skill[], skill) => {
  const method = skill.isDone ? mapItemsAfter : mapItemsBefore;
  const index = skills.findIndex(s => s.title === skill.title);
  return method(skills, index, s => ({ ...s, isDone: !skill.isDone }));
};

export const markCurrentSkill = skills =>
  skills.map((s, index) => ({
    ...s,
    isCurrent:
      (index == 0 && !s.isDone) ||
      (index > 0 && skills[index - 1].isDone && !s.isDone)
  }));
