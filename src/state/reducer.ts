import domains from "./data";
import { selectSelectedSkill } from "./selectors";
import { cloneDeep } from "lodash";

export default (state = { domains: domains }, action) => {
  if (action.type === "SELECT_DOMAIN")
    return {
      ...state,
      selectedDomainId: action.payload
    };
  if (action.type === "SELECT_SKILL")
    return {
      ...state,
      selectedSkillId: action.payload
    };
  if (action.type === "TOGGLE_LEVEL") {
    //Ugly state copying, normalize and modify
    const copy = cloneDeep(state);
    const skill = selectSelectedSkill(copy);
    const level = skill.levels.find(l => l.id === action.payload);
    console.log(skill, level, action.payload);
    level.isDone = !level.isDone;
    return copy;
  }
  return state;
};
