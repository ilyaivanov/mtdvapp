import { Level } from "./types";
import { seniorityTitles } from "./state/data";

export const markCurrentSkill = (skills: Level[]) => {
  const firstUndoneSkill = skills.find(s => !s.isDone);
  if (!firstUndoneSkill) return skills;
  return skills.map(
    s => (s.id === firstUndoneSkill.id ? { ...s, isCurrent: true } : s)
  );
};

export const selectLevel = (levels: Level[]) => {
  const marked = markCurrentSkill(levels);
  const currentIndex = marked.findIndex(s => s.isCurrent);
  if (currentIndex > 0) return levels[currentIndex - 1].title;
  else return seniorityTitles[0];
};
