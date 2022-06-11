import { COMMANDS } from "../configs.js";
import { upHandler } from "../modules/upHandler.js";
import { cdHandler } from "../modules/cdHandler.js";
import { lsHandler } from "../modules/lsHandler.js";
import { catHandler } from "../modules/catHandler.js";
import { addFileHandler } from "../modules/addFileHandler.js";
import { renameHandler } from "../modules/renameHandler.js";
import { copyFileHandler } from "../modules/copyHandler.js";
import { moveFileHandler } from "../modules/moveFileHandler.js";
import { removeFileHandler } from "../modules/removeHandler.js";
import { osHandler } from "../modules/osHandler.js";

export const switchCommandHandler = (command, commandArgs) => {
    switch (command) {
        case COMMANDS.up: {
            upHandler();
            return;
        }
        case COMMANDS.cd: {
            cdHandler(commandArgs[0]);
            return;
        }
        case COMMANDS.ls: {
            lsHandler();
            return;
        }
        case COMMANDS.cat: {
            catHandler(commandArgs[0]);
            return;
        }
        case COMMANDS.add: {
            addFileHandler(commandArgs[0]);
            return;
        }
        case COMMANDS.rn: {
            renameHandler(commandArgs);
            return;
        }
        case COMMANDS.cp: {
            copyFileHandler(commandArgs);
            return;
        }
        case COMMANDS.mv: {
            moveFileHandler(commandArgs);
            return;
        }
        case COMMANDS.rm: {
            removeFileHandler(commandArgs[0]);
            return;
        }
        case COMMANDS.os: {
            osHandler(commandArgs[0]);
            return;
        }
    }
}
