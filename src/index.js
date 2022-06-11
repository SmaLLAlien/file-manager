import { homedir } from 'os';


import { getUser } from './utlis/getUser.js';
import {ALLOWED_COMMANDS, ERRORS} from "./configs.js";
import {switchCommandHandler} from "./utlis/getCommandHandler.js";
import {handleError} from "./utlis/handleError.js";

// console.log(ALLOWED_COMMANDS);

const args = process.argv.slice(2);
const user = getUser(args);

const changeUserDirectoryToHome = () => {
    process.chdir(homedir());
}

changeUserDirectoryToHome();
process.stdout.write(`Welcome to the File Manager, ${user}!\n`);
process.stdout.write(`You are currently in ${process.cwd()} directory \n`);

process.stdin.on('data', (chunk) => {
    const userInput = chunk.toString();
    const [command, ...commandArgs] = userInput.trim().split(' ');

    if (ALLOWED_COMMANDS.includes(command)) {
        switchCommandHandler(command, commandArgs);
        process.stdout.write(`You are currently in ${process.cwd()} directory \n`);
    } else {
        handleError(ERRORS.invalidInput);
    }
});
