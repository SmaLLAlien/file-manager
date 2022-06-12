import { createReadStream } from 'fs';
import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";
import { writeCurrDirectory } from "../utlis/writeCurrDirectory.js";

export const catHandler = (path) => {
    try {
        const readStream = createReadStream(path, { encoding: 'utf-8' });
        readStream.on('error', () => handleError(ERRORS.failed)).pipe(process.stdout);
        readStream.on('end', () => {
            process.stdout.write('\n');
            writeCurrDirectory();
        });
    } catch (e) {
        handleError(ERRORS.failed);
    }
}
