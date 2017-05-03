var unuseableNumbers = ["1", "2","3","4","5","6","7","8","9","0"];
var unuseableCharacters = [".", ",","/","#","!","$","%","^","&","*",";",":","{","}","=","-","_","`","~","(",")"];
var vowelArray = ["a","e","i","o","u"];

var verified  = function (string, array) {
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
function addWay(string) {
  return string+"way";
}
function multiLetterSliceAy(string, place0, place1, place2){
  return (string.slice(place0) + string.slice(place1, place2) + "ay");
}


var ifTests = function(sentence, unuseableNumbers, vowelArray){
  var str;
  if (verified(sentence, unuseableNumbers)) {//not a string
    console.log("improper characters, please remove number");
  } else {//is a string
    console.log("contains appropriate letters")
    if (verified(sentence.charAt(0), vowelArray)) {//first character is vowel
     str = addWay(sentence);
    }
    else if ((sentence.charAt(0) === "q") && (sentence.charAt(1) === "u")){
      str = multiLetterSliceAy(sentence, 2, 0, 2);
    }
    else if (verified(sentence.slice(0,2), vowelArray)){// if second letter is vowel
     str = multiLetterSliceAy(sentence, 1, 0, 1);
    }
    else if (verified(sentence.slice(0,3), vowelArray)){// if the third letter is vowel
     str = multiLetterSliceAy(sentence, 2, 0, 2);
    }
    else {
      str = multiLetterSliceAy(sentence, 3, 0, 3);// ONLY the first letter is a consonant
   }
  }
  return str;
};
//USER INTERFACE LOGIC
$(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    console.log(ifTests($("input#userString").val(), unuseableNumbers, vowelArray));
  });
});
