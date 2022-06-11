import { readdir } from 'fs/promises';
import { statSync } from 'fs';
import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";
import { writeCurrDirectory } from "../utlis/writeCurrDirectory.js";

export const lsHandler = async () => {
    try {
        const currPath = process.cwd();
        let files = await readdir(currPath);

        files = files.map(file => statSync(file).isDirectory() ? `${file}/` : file);

        process.stdout.write(`${files.join(',   ')}\n`);
        writeCurrDirectory();
    } catch (e) {
        handleError(ERRORS.failed);
    }
}
