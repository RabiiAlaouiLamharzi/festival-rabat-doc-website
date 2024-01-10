let GlobalVariable = "FR";

export const getGlobalLanguage = () => {
  return GlobalVariable;
};

export const setGlobalLanguage = (language) => {
  GlobalVariable = language;
};
