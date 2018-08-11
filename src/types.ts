export type Level = {
  id: string;
  title: string;
  description: string;
  isDone?: boolean;
  isCurrent?: boolean;
};
export type Skill = {
  id: string;
  title: string;
  levels: Level[];
};

export type Domain = {
  id: string;
  title: string;
  skills: Skill[];
  color: string;
};

export type State = {
  domains: Domain[];
};
