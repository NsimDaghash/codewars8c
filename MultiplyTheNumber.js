/*

Multiply the number

Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3) == 15 // 3 * 5¹
multiply(10) == 250 // 10 * 5²
multiply(200) == 25000 // 200 * 5³
multiply(0) == 0 // 0 * 5¹
multiply(-3) == -15 // -3 * 5¹
*/

function multiply(number) {
  // Check if the input is a number
  if (typeof number !== "number") {
    return "Input is not a number";
  }

  // Convert the number to a string to get the length
  const length = Math.abs(number).toString().length;

  // Multiply the number by 5 raised to the power of the length
  const result = number * Math.pow(5, length);

  return result;
}
