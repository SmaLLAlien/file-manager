import { isFileExists } from "../utlis/isFileExist.js";
import { unlink } from 'fs/promises';
import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";

export const removeFileHandler = async (file) => {
    try {
        if (!file || typeof file !== 'string' || !file.trim()) {
            throw new Error(ERRORS.invalidInput);
        }

        const isFileExist = await isFileExists(file);

        if (!isFileExist) {
            throw new Error(ERRORS.failed);
        } else {
            await unlink(file);
        }

    } catch (e) {
        if (e.message === ERRORS.invalidInput) {
            handleError(ERRORS.invalidInput);
        } else {
            handleError(ERRORS.failed);
        }
    }
}
