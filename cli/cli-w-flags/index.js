const { printWelcomeMsg, getValueOfFlag } = require("./functions");
const { _firstNameFlag, _lastNameFlag } = require("./flags");

printWelcomeMsg();

const firstNameValue = getValueOfFlag(_firstNameFlag);
const lastNameValue = getValueOfFlag(_lastNameFlag);

console.log(`Hello ${firstNameValue} ${lastNameValue}`);
console.log(""); // just a break line
process.exit(0);