import { ERRORS } from "../configs.js";
import { writeCurrDirectory } from "./writeCurrDirectory.js";

export const handleError = error => {
    let msg = ERRORS.failed;
    if (typeof error === 'object') {
        msg = error.message;
    } else if (typeof error === 'string') {
        msg = error;
    }
    process.stderr.write(`\x1b[91m${msg}\x1b[39m \n`);
    writeCurrDirectory();
}
