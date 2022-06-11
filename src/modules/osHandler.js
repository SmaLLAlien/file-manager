import { ALLOWED_OS_OPTIONS } from "../configs.js";
import { callOsFunc } from "../utlis/callOsFunc.js";

export const osHandler = async (args) => {
    try {
       if (!args || typeof args !== "string" || !args.startsWith('--')) {
           throw new Error('Invalid input');
       } else {
           const userOption = args.replace('--', '').trim();
           if (ALLOWED_OS_OPTIONS.includes(userOption)) {
               callOsFunc(userOption)
           } else {
               throw new Error('Invalid input');
           }
       }
    } catch (e) {
        if (e.message === 'Invalid input') {
            process.stderr.write('Invalid input\n');
        } else {
            process.stderr.write('Operation failed\n');
        }
    }
}
