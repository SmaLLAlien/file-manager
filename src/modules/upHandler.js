import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";

export const upHandler = () => {
   try {
       process.chdir('../');
   } catch (e) {
       handleError(ERRORS.failed);
   }
}
