import { createReadStream } from 'fs';
import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";

export const catHandler = (path) => {
    try {
        const readStream = createReadStream(path, { encoding: 'utf-8' });
        readStream.on('error', () => process.stderr.write(`Operation failed\n`)).pipe(process.stdout);
        readStream.on('end', console.log);
    } catch (e) {
        handleError(ERRORS.failed);
    }
}
