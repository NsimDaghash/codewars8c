/*

Vowel remover

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/
function shortcut (string) {
  const vowels_letters = ["a", "e", "i", "o", "u"];
  let newString="";
  string = string.split("");
  for (i =0 ; i< string.length;i++){
    if (vowels_letters.includes(string[i])){
      
    }
    else{
      newString=newString+string[i];
    }
  }
  return newString;
}