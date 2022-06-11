import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";

export const cdHandler = (path) => {
    try {
        process.chdir(path);
    } catch (e) {
        handleError(ERRORS.failed);
    }
}
