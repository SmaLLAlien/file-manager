import { writeFile } from 'fs/promises';
import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";
import { writeCurrDirectory } from "../utlis/writeCurrDirectory.js";

export const addFileHandler = async (fileName) => {
    try {
        if (!fileName) {
            throw Error(ERRORS.invalidInput);
        }
        await writeFile(fileName, '', { flag: 'wx' });
        writeCurrDirectory();
    } catch (e) {
        if (e.message === ERRORS.invalidInput) {
            handleError(ERRORS.invalidInput);
        } else {
            handleError(ERRORS.failed);
        }
    }
}
