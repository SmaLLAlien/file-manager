import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";
import { writeCurrDirectory } from "../utlis/writeCurrDirectory.js";

export const upHandler = () => {
   try {
       process.chdir('../');
       writeCurrDirectory();
   } catch (e) {
       handleError(ERRORS.failed);
   }
}
