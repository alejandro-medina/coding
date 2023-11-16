const {
  countWords,
  validateArguments,
  getArgumentByIndex
} = require("./functions");

// Validations
validateArguments(process.argv);

// Make all magic
const text = getArgumentByIndex(2);
const totalWords = countWords(text);

// Return result
console.log("Total words: " + totalWords);
process.exit(0);
