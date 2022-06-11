import { getUser } from './utlis/getUser.js';
import { ALLOWED_COMMANDS, ERRORS } from "./configs.js";
import { switchCommandHandler } from "./utlis/getCommandHandler.js";
import { handleError } from "./utlis/handleError.js";
import { writeCurrDirectory } from "./utlis/writeCurrDirectory.js";
import { changeUserDirectoryToHome } from "./utlis/changeUserDirectoryToHome.js";

const args = process.argv.slice(2);
const user = getUser(args);

changeUserDirectoryToHome();
process.stdout.write(`Welcome to the File Manager, ${user}!\n`);
writeCurrDirectory();

process.stdin.on('data', (chunk) => {
    const userInput = chunk.toString();
    const [command, ...commandArgs] = userInput.trim().split(' ');

    if (ALLOWED_COMMANDS.includes(command)) {
        switchCommandHandler(command, commandArgs);
        writeCurrDirectory();
    } else {
        handleError(ERRORS.invalidInput);
    }
});
