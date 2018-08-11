import domains from "./domains";

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
  return state;
};
