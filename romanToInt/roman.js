const romanToInt = function (string) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    M: 1000,
    C: 100,
    D: 500,
  };

  let result = 0;

  for (let i = 0; i < string.length; i++) {
    let currentValue = roman[string[i]];
    let nextValue = roman[string[i + 1]];

    if (
      nextValue < currentValue ||
      nextValue == currentValue ||
      nextValue === undefined
    ) {
      result += currentValue;
    } else if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    }
    if (i == string.length - 1) {
      return result;
    }
  }
};

romanToInt("LIX");
