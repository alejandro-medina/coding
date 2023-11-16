const { _firstNameFlag, _lastNameFlag } = require("./flags");

function printWelcomeMsg() {
  console.log("                        ");
  console.log("Welcome to print my name");
  console.log("                        ");
}

function printInstructions() {
  console.log(`Usage: node index ${_firstNameFlag} Alejandro ${_lastNameFlag} Medina`);
  console.log("");
}

function getIndexOfFlag(flag) {
  return process.argv.indexOf(flag);
}

function showError() {
  printInstructions();
  process.exit(1);
}

function getValueOfFlag(flag) {
  // get the flag index
  const indexOfFlag = getIndexOfFlag(flag);
  // validate that the flag exist
  if (indexOfFlag <= -1) showError();

  // get the value of the flag
  const valueOfFlag = process.argv[indexOfFlag + 1];
  // validate that the value is valid
  if (!valueOfFlag) showError();
  return valueOfFlag;
}

module.exports = {
  printInstructions,
  printWelcomeMsg,
  getIndexOfFlag,
  getValueOfFlag
}