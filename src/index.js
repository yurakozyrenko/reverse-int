module.exports = function reverse (number) {
  let reverseNum = number.toString().split("").reverse().join("");
  return parseInt(reverseNum);
}
