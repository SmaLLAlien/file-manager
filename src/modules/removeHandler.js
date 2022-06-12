import { isFileExists } from "../utlis/isFileExist.js";
import { unlink } from 'fs/promises';
import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";
import { writeCurrDirectory } from "../utlis/writeCurrDirectory.js";

export const removeFileHandler = async (file) => {
    try {
        if (!file || typeof file !== 'string' || !file.trim()) {
            console.error('Pleas check your path to file');
            throw new Error(ERRORS.invalidInput);
        }

        const isFileExist = await isFileExists(file);

        if (!isFileExist) {
            console.error('Current file doesnt exist');
            throw new Error(ERRORS.failed);
        } else {
            await unlink(file);
            writeCurrDirectory();
        }

    } catch (e) {
        if (e.message === ERRORS.invalidInput) {
            handleError(ERRORS.invalidInput);
        } else {
            handleError(ERRORS.failed);
        }
    }
}
