export const findLongestUniqueWord = (text: string) => {
  const textArray = text.split(/\s+/);

  let longestWord = '';

  for (const word of textArray) {
    const uniqueChars = new Set();

    for (const char of word) {
      uniqueChars.add(char);
    }

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};
