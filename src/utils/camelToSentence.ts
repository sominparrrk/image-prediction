export const camelToSentence = (camelString: string): string => {
  return camelString
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
};
