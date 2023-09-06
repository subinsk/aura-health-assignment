export const findLongestUniqueWord = (text: string) => {
  const textArray = text.split(/\s+/);

  let longestWord = '';

  textArray.forEach((word) => {
    const uniqueChars = new Set();
    let isUnique = true;

    for (const char of word) {
      if (uniqueChars.has(char)) {
        isUnique = false;
        break;
      }
      uniqueChars.add(char);
    }

    if (isUnique && word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
};
