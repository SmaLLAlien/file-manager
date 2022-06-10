import { COMMANDS } from "../configs.js";
import { UpHandler } from "../modules/upHandler.js";
import {CdHandler} from "../modules/cdHandler.js";
import {LsHandler} from "../modules/lsHandler.js";

export const switchCommandHandler = (command, commandArgs) => {
    switch (command) {
        case COMMANDS.up: {
            UpHandler();
            return;
        }
        case COMMANDS.cd: {
            CdHandler(commandArgs);
            return;
        }
        case COMMANDS.ls: {
            LsHandler();
            return;
        }
    }
}
