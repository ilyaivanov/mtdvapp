export type Level = {
  title: string;
  description: string;
  isDone: boolean;
  isCurrent?: boolean;
};
export type Skill = {
  title: string;
  levels: Level[];
};

export type Domain = {
  title: string;
  skills: Skill[];
  color: string;
};
