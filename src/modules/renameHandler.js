import { rename } from 'fs/promises';
import { isFileExists } from '../utlis/isFileExist.js';
import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";
import { writeCurrDirectory } from "../utlis/writeCurrDirectory.js";

export const renameHandler = async (args) => {
    try {
        if (!args) {
            throw new Error(ERRORS.invalidInput);
        }

        const fileNames = args.filter(f => !!f);
        if (fileNames.length < 2) {
            throw new Error(ERRORS.invalidInput);
        } else {
            const isOldNameExist = await isFileExists(fileNames[0]);
            const isNewNameExist = await isFileExists(fileNames[1]);

            if (!isOldNameExist || isNewNameExist) {
                throw new Error(ERRORS.failed);
            } else {
                await rename(fileNames[0], fileNames[1]);
                writeCurrDirectory();
            }
        }
    } catch (e) {
        if (e.message === ERRORS.invalidInput) {
            handleError(ERRORS.invalidInput);
        } else {
            handleError(ERRORS.failed);
        }
    }
}
