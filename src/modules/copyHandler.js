import { isFileExists } from "../utlis/isFileExist.js";
import { join } from "path";
import { copyFile } from 'fs/promises';

export const copyFileHandler = async (args) => {
    try {
        const paths = args.filter(p => !!p);
        if (!args || paths.length < 2) {
            throw new Error('Invalid input');
        }

        const [curFile, destinationFolder] = paths;
        const isCurExist = await isFileExists(curFile);
        const isFileInDestinationFolderExist = await isFileExists(join(destinationFolder, curFile));

        if (!isCurExist || isFileInDestinationFolderExist) {
            throw new Error('Operation failed\n');
        } else {
            await copyFile(curFile, join(destinationFolder, curFile));
        }

    } catch (e) {
        if (e.message === 'Invalid input') {
            process.stderr.write('Invalid input\n');
        } else {
            process.stderr.write('Operation failed\n');
        }
    }
}
