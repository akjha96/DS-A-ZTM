const reverseString = (str) => {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmmm that is not good";
  }

  // brute force approach
  let reversedArray = [];

  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    reversedArray.push(str[i]);
  }
  return reversedArray.join("");
};

const reverseString2 = (str) => {
  str = str.split("").reverse().join("");
  return str;
};

const reverseString3 = (str) => {
  str = [...str].reverse().join("");
  return str;
};

console.log(reverseString("123"));
console.log(reverseString2("123"));
console.log(reverseString3("123"));
