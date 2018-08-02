import domains from "./domains";

export default (state = { domains: domains }, action) => {
  if (action.type === "SELECT_DOMAIN")
    return {
      ...state,
      selectedDomainId: action.id
    };
  return state;
};
