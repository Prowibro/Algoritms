/* happy numbers constants */
const BASE = 2;
const P = 2;
const happynumbers = [1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100];

/**
 * Method that determines if a number n is a happy number
 * @param {number} n 
 */
const isHappy = (n) => {
  if (n >= 1) {
    if (happynumbers.includes(n)) {
      return true;
    }
    for (let i = 0; i <= Math.ceil((Math.log(n) / Math.log(BASE))) + 1; i++) {
      let current = `${n}`.split("");
      n = 0;
      for (let j = 0; j < current.length; j++) {
        n += Math.pow(current[j], P);
      }
      if (n === 1) {
        return true;
      }
    }
  };
  return false;
};
