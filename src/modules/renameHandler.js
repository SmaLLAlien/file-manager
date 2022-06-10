import { rename } from 'fs/promises';
import { isFileExists } from '../utlis/isFileExist.js';

export const renameHandler = async (args) => {
    try {
        if (!args) {
            throw new Error('Invalid input');
        }

        const fileNames = args.filter(f => !!f);
        if (fileNames.length < 2) {
            throw new Error('Invalid input');
        } else {
            const isOldNameExist = await isFileExists(fileNames[0]);
            const isNewNameExist = await isFileExists(fileNames[1]);

            if (!isOldNameExist || isNewNameExist) {
                process.stderr.write('Operation failed\n')
            } else {
                await rename(fileNames[0], fileNames[1]);
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
