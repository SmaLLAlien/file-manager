import { ALLOWED_OS_OPTIONS, ERRORS } from "../configs.js";
import { callOsFunc } from "../utlis/callOsFunc.js";
import { handleError } from "../utlis/handleError.js";
import { writeCurrDirectory } from "../utlis/writeCurrDirectory.js";

export const osHandler = async (args) => {
    try {
       if (!args || typeof args !== "string" || !args.startsWith('--')) {
           throw new Error(ERRORS.invalidInput);
       } else {
           const userOption = args.replace('--', '').trim();
           if (ALLOWED_OS_OPTIONS.includes(userOption)) {
               callOsFunc(userOption);
               writeCurrDirectory();
           } else {
               throw new Error(ERRORS.invalidInput);
           }
       }
    } catch (e) {
        if (e.message === ERRORS.invalidInput) {
            handleError(ERRORS.invalidInput);
        } else {
            handleError(ERRORS.failed);
        }
    }
}
