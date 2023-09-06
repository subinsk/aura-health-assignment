export const findLongestUniqueWord = (text: string) => {
  const textArray = text.split(/\s+/);

  let longestWord = '';
  let maxUniqueChars = 0;

  for (const word of textArray) {
    const uniqueChars = new Set();

    for (const char of word) {
      uniqueChars.add(char);
    }

    if (uniqueChars.size > maxUniqueChars) {
      longestWord = word;
      maxUniqueChars = uniqueChars.size;
    }
  }

  return longestWord;
};
