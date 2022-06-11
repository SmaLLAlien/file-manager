import { readFile } from 'fs/promises';
import { isFileExists } from '../utlis/isFileExist.js';
import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";
import { createHash } from 'crypto';
import { writeCurrDirectory } from "../utlis/writeCurrDirectory.js";

export const hashHandler = async (args) => {
    try {
        if (!args || typeof args !== 'string') {
            throw new Error(ERRORS.invalidInput);
        }

        const fileName = args.trim();
        const isFileExist = await isFileExists(fileName);

        if (!isFileExist) {
            throw new Error(ERRORS.failed);
        } else {
            const fileContent = await readFile(fileName, 'utf-8');
            const stringHash = await createHash('sha256').update(fileContent).digest('hex');
            process.stdout.write(`${stringHash}\n`);
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
