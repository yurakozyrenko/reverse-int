module.exports = function reverse (number) {
  let reverseNum = number.split("").reverse().join("");
  return reverseNum;
}
