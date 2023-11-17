const commander = require("commander");

commander
  .name('node index')
  .description('CLI tools to print your name')
  .version('1.0.0', '-v, --version')
  .usage('[OPTIONS]...')
  .requiredOption('-n, --name <value>', 'Name')
  .option('-l, --lastname <value>', 'Last name', '')
  .option('-lnf, --lastname-first', 'Print the last name in first position')
  .parse(process.argv);


const options = commander.opts();
const firstName = options.name;
const lastName = options.lastname;

const fullNameArray = [firstName, lastName];
if (options.lastnameFirst) {
  fullNameArray.reverse();
}
console.log(`Hello ${fullNameArray.join(" ")}`);

process.exit(0);