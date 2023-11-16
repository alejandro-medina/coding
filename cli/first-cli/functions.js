function printWelcomeMessage() {
  console.log("= = = = = = = = = = = = = = = = = = = =");
  console.log("                                       ");
  console.log("          W E L C O M E   TO           ");
  console.log("              W C O U N T              ");
  console.log("                                       ");
  console.log("                                       ");
  console.log("   usage: node wcount \"Hello world\"  ");
  console.log("                                       ");
  console.log("= = = = = = = = = = = = = = = = = = = =");
}

function countWords(text) {
  return text.split(" ").length;
}

// only expect 1 argument (the text to count)
// so we need to check for 3
function validateArguments(argv) {
  if (argv.length != 3) {
    printWelcomeMessage();
    process.exit(1);
  }
}

function getArgumentByIndex(index) {
  return process.argv[index]
}

module.exports = {
  printWelcomeMessage,
  validateArguments,
  countWords,
  getArgumentByIndex
}