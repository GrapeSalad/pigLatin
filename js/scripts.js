// function getSplitString(string) {
//   return array = string.split("");
// }
// function checkString(array) {
//
// }
var unuseableNumbers = ["1", "2","3","4","5","6","7","8","9","0"];
var unuseableCharacters = [".", ",","/","#","!","$","%","^","&","*",";",":","{","}","=","-","_","`","~","(",")"];
var vowelArray = ["a","e","i","o","u"];

var verified  = function (string, array) {
  // debugger;
  var Bool;
  for (var i = 0; i < array.length; i++) {
    if (string.includes(array[i])) {
      Bool = true;
      return Bool;
    }
    else {
      Bool = false;
    }
  }
  return Bool;
}

var sentence = "quontins";
// var isBool = isVerified(test);
// console.log(isBool);

if (verified(sentence, unuseableNumbers)) {//not a string
  console.log("improper characters, please remove number");
} else {//is a string
  console.log("contains appropriate letters")
 if (verified(sentence.charAt(0), vowelArray)) {//first character is vowel
   console.log("the first character is a vowel");
 } else {// first letter is a consonant
   console.log("first letter is consonant");
   if (verified(sentence.charAt(1), vowelArray)){//second letter is vowel
     console.log("second letter is a vowel");
     if((sentence.charAt(0) === "q") && (sentence.charAt(1) === "u")) {
       console.log("starts with qu");
     }
   } else {//second letter is a consonant
     console.log("second letter is a consonant");
   }
 }
}

if ("not a str") {

}
else //if string
{
  if ("vowel") {

  } else {//con
    if ("second is vowel") {

    }else {
      //second is consonant
    }
  }

}


// if (splitString.indexOf(unuseableNumbers) === -1) {
//   var returnTest = "Im so confused";
//   return true;
//   console.log(returnTest);
// } else {
//   return false;
// }
