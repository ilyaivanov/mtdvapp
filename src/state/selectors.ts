export const selectSelectedDomain = state => {
  if (state.selectedDomainId)
    return selectDomains(state).find(d => d.id === state.selectedDomainId);
  return undefined;
};

export const selectDomains = state => state.domains;

export const selectSelectedSkill = state => {
  const domain = selectSelectedDomain(state);
  if(domain && state.selectedSkillId)
}