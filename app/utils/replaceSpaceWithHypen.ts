export const replaceSpaceWithHypen = (input: string): string => {
  const trimmedString = input.trim();
  const stringWithDashes = trimmedString.replace(/\s+/g, '-');
  const lowercaseString = stringWithDashes.toLowerCase();
  return lowercaseString;
};
