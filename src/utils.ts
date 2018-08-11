import { Level, Skill } from "./types";

export const markCurrentSkill = (skills: Level[]) => {
  const firstUndoneSkill = skills.find(s => !s.isDone);
  return skills.map(
    s => (s.id === firstUndoneSkill.id ? { ...s, isCurrent: true } : s)
  );
};

export const selectLevel = (levels: Level[]) => {
  const marked = markCurrentSkill(levels);
  const currentIndex = marked.findIndex(s => s.isCurrent);
  if (currentIndex > 0) return levels[currentIndex].title;
  else return "Intern";
};
