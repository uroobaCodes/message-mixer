import { caesarCipher, symbolCipher, reverseCipher } from "./utils.mjs";

const encryptionType = process.argv[2];
const encryptionAmount = Number(process.argv[3]);

// Get the encryption function based on user input
function determineEncryptionMethod(type, amount) {
  if (type === "symbol") {
    return symbolCipher;
  } else if (type === "reverse") {
    return reverseCipher;
  } else if (type === "caesar") {
    if (Number.isNaN(amount)) {
      console.error(
        "Error: Please provide a valid number for the Caesar cipher shift."
      );
      process.exit();
    }
    return (message) => caesarCipher(message, amount);
  } else {
    console.error(
      "Error: Please specify a valid encryption type: symbol, reverse, or caesar."
    );
    process.exit();
  }
}

// Prompt the user for a message and encrypt it
function handleUserInput(encryptionMethod) {
  process.stdout.write("Enter the message you would like to encrypt:\n> ");
  process.stdin.on("data", (input) => {
    const message = input.toString().trim();
    const encryptedMessage = encryptionMethod(message);
    console.log(`\nHere is your encrypted message:\n> ${encryptedMessage}`);
    process.exit();
  });
}

// Main program flow
const encryptionMethod = determineEncryptionMethod(
  encryptionType,
  encryptionAmount
);
handleUserInput(encryptionMethod);
