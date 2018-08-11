import { Domain, Skill } from "../types";

export const selectDomain = (domain: Domain) => ({
  type: "SELECT_DOMAIN",
  payload: domain.id
});

export const selectSkill = (skill: Skill) => ({
  type: "SELECT_SKILL",
  payload: skill.id
});
