import { ERRORS } from "../configs.js";
import { isFileExists } from "../utlis/isFileExist.js";
import { createReadStream, createWriteStream } from "fs";
import { writeCurrDirectory } from "../utlis/writeCurrDirectory.js";
import { handleError } from "../utlis/handleError.js";
import * as zlib from 'zlib';

export const compressHandler = async (args) => {
    try {
        const paths = args.filter(p => !!p).map(p => p.trim());
        if (!args || paths.length < 2) {
            console.error('Pleas check your paths to files');
            throw new Error(ERRORS.invalidInput);
        }

        const [source, destination] = paths;
        const isCurExist = await isFileExists(source);
        const isDestinationExist = await isFileExists(destination);

        if (!isCurExist || isDestinationExist) {
            console.error('Current file doesnt exist or destination have been already existed');
            throw new Error(ERRORS.failed);
        } else {
            const readStream = createReadStream(source);
            const writeStream = createWriteStream(destination);
            const zip = zlib.createGzip();
            readStream.on('error', () => handleError(ERRORS.failed))
                .pipe(zip.on('error', () => handleError(ERRORS.failed)))
                .pipe(writeStream.on('error', () => handleError(ERRORS.failed)));
            zip.on('end', () => {
                writeStream.end();
                writeCurrDirectory();
            });
        }

    } catch (e) {
        if (e.message === ERRORS.invalidInput) {
            handleError(ERRORS.invalidInput);
        } else {
            handleError(ERRORS.failed);
        }
    }
}
