import { isFileExists } from "../utlis/isFileExist.js";
import { join } from "path";
import { copyFile } from 'fs/promises';
import { handleError } from "../utlis/handleError.js";
import { ERRORS } from "../configs.js";
import { writeCurrDirectory } from "../utlis/writeCurrDirectory.js";

export const copyFileHandler = async (args) => {
    try {
        const paths = args.filter(p => !!p);
        if (!args || paths.length < 2) {
            console.error('Pleas check your paths to files');
            throw new Error(ERRORS.invalidInput);
        }

        const [curFile, destinationFolder] = paths;
        const isCurExist = await isFileExists(curFile);
        const isFileInDestinationFolderExist = await isFileExists(join(destinationFolder, curFile));

        if (!isCurExist || isFileInDestinationFolderExist) {
            console.error('Current file doesnt exist or destination have been already existed');
            throw new Error(ERRORS.failed);
        } else {
            await copyFile(curFile, join(destinationFolder, curFile));
            writeCurrDirectory();
        }

    } catch (e) {
        if (e.message === ERRORS.invalidInput) {
            handleError(ERRORS.invalidInput);
        } else {
            handleError(ERRORS.failed);
        }
    }
}
