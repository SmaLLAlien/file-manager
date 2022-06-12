import { getUser } from './utlis/getUser.js';
import { ALLOWED_COMMANDS, ERRORS } from "./configs.js";
import { switchCommandHandler } from "./utlis/getCommandHandler.js";
import { handleError } from "./utlis/handleError.js";
import { writeCurrDirectory } from "./utlis/writeCurrDirectory.js";
import { changeUserDirectoryToHome } from "./utlis/changeUserDirectoryToHome.js";
import { handleProcessExit } from "./utlis/handleProcessExit.js";

const args = process.argv.slice(2);
const user = getUser(args);

changeUserDirectoryToHome();
process.stdout.write(`Welcome to the File Manager, ${user}!\n`);
writeCurrDirectory();

process.stdin.on('data', (chunk) => {
    const userInput = chunk.toString();
    const [command, ...commandArgs] = userInput.trim().split(' ').map(item => item.trim());

    if (ALLOWED_COMMANDS.includes(command)) {
        switchCommandHandler(command, commandArgs);
    } else {
        handleError(ERRORS.invalidInput);
    }
});

[`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach((eventType, index) => {
    process.on(eventType, () => handleProcessExit(index + 1, user));
})
