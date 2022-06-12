import { createReadStream } from 'fs';
import { isFileExists } from '../utlis/isFileExist.js';
import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";
import { createHash } from 'crypto';
import { writeCurrDirectory } from "../utlis/writeCurrDirectory.js";

export const hashHandler = async (args) => {
    try {
        if (!args || typeof args !== 'string') {
            console.error('Pleas check your path to file');
            throw new Error(ERRORS.invalidInput);
        }

        const fileName = args.trim();
        const isFileExist = await isFileExists(fileName);

        if (!isFileExist) {
            console.error('Current file doesnt exist');
            throw new Error(ERRORS.failed);
        } else {
            const readStream = createReadStream(fileName, { encoding: 'utf-8' });
            const hash = createHash('sha256');
            hash.setEncoding('hex');
            readStream.pipe(hash).pipe(process.stdout);
            hash.on('close', () => {
                console.log();
                writeCurrDirectory();
            })
        }
    } catch (e) {
        if (e.message === ERRORS.invalidInput) {
            handleError(ERRORS.invalidInput);
        } else {
            handleError(ERRORS.failed);
        }
    }
}
