/*
Find the position!

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

function position(letter) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let position = alphabet.indexOf(letter.toLowerCase()) + 1;
  return "Position of alphabet: " + position;
}
