function isIsogram(str) {
  const newString = str.toLowerCase();
  const charMap = {};

  for (let i = 0; i < newString.length; i++) {
    const char = newString[i];

    if (charMap[char]) {
      return false;
    } else {
      charMap[char] = true;
    }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
