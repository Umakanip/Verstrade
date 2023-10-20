function getBalancedSubstrings(S) {
  const longestBalancedSubstrings = [];
  const uniqueChars = [...new Set(S)];

  for (let i = 0; i < uniqueChars.length; i++) {
    for (let j = i + 1; j < uniqueChars.length; j++) {
      const char1 = uniqueChars[i];
      const char2 = uniqueChars[j];
      const validChars = new Set([char1, char2]);

      let currentSubstring = "";
      let charCount = { [char1]: 0, [char2]: 0 };

      for (let k = 0; k < S.length; k++) {
        const currentChar = S[k];

        if (validChars.has(currentChar)) {
          currentSubstring += currentChar;
          charCount[currentChar]++;

          if (charCount[char1] === charCount[char2] && charCount[char1] > 0) {
            longestBalancedSubstrings.push(currentSubstring);
          }
        } else {
          currentSubstring = "";
          charCount = { [char1]: 0, [char2]: 0 };
        }
      }
    }
  }

  const maxLen = Math.max(
    ...longestBalancedSubstrings.map((str) => str.length)
  );

  return longestBalancedSubstrings.filter((str) => str.length === maxLen);
}

// Examples
console.log(getBalancedSubstrings("cabbacc")); // ["abba"]
console.log(getBalancedSubstrings("abababa")); // ["ababab", "bababa"]
console.log(getBalancedSubstrings("aaaaaaa")); // []
console.log(getBalancedSubstrings("ddccaabbaa"));
console.log(getBalancedSubstrings("umakani"));
