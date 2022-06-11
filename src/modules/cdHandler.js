import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";
import { writeCurrDirectory } from "../utlis/writeCurrDirectory.js";

export const cdHandler = (path) => {
    try {
        process.chdir(path);
        writeCurrDirectory();
    } catch (e) {
        handleError(ERRORS.failed);
    }
}
