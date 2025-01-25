export function caesarCipher(char, amount = 0) {
  if (typeof char !== "string") {
    console.log("please enter a string");
    return;
  }
  if (amount < 0) {
    return myFunc(amount + 26);
  }
  let output = "";
  let noSpace = char.replaceAll(" ", "");

  for (let i = 0; i < noSpace.length; i++) {
    const currentCharacter = noSpace[i];

    if (
      (currentCharacter.charCodeAt(0) >= 65 &&
        currentCharacter.charCodeAt(0) <= 90) ||
      (currentCharacter.charCodeAt(0) >= 97 &&
        currentCharacter.charCodeAt(0) <= 122)
    ) {
      // console.log('this is an alphabet')

      let codeCurrentChar = currentCharacter.charCodeAt();
      // console.log(currentCharacter)
      // console.log(codeCurrentChar)
      if (codeCurrentChar >= 97 && codeCurrentChar <= 122) {
        let zeroIndex = ((codeCurrentChar - 97 + amount) % 25) + 97;
        // console.log(zeroIndex)
        let makeStringAgain = String.fromCharCode(zeroIndex);
        // console.log(makeStringAgain)
        output = output + makeStringAgain;
        // console.log(output)
      }
    } else {
      console.log("this is not an alphabet");
    }
  } //for loop ends

  return output;
}
//
export function symbolCipher(str) {
  const symbols = {
    i: "!",
    "!": "i",
    l: "1",
    1: "l",
    s: "$",
    $: "s",
    o: "0",
    0: "o",
    a: "@",
    "@": "a",
    e: "3",
    3: "e",
    b: "6",
    6: "b",
  };
  let output = "";

  for (let i = 0; i < str.length; i++) {
    let lowerCase = str.toLowerCase();
    let elementInSymbol = symbols[lowerCase[i]];
    if (elementInSymbol) {
      output = output + elementInSymbol;
    } else {
      output = output + lowerCase[i];
    }
  }

  return output;
}
//
export function reverseCipher(sentence) {
  let split = sentence.split(" ");

  let output = "";

  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].split("").reverse().join("");
    output = split.join(" ");
  }
  return output;
}
