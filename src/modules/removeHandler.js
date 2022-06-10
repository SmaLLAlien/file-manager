import { isFileExists } from "../utlis/isFileExist.js";
import { unlink } from 'fs/promises';

export const removeFileHandler = async (file) => {
    try {
        if (!file || typeof file !== 'string' || !file.trim()) {
            throw new Error('Invalid input');
        }

        const isFileExist = await isFileExists(file);

        if (!isFileExist) {
            throw new Error('Operation failed\n');
        } else {
            await unlink(file);
        }

    } catch (e) {
        if (e.message === 'Invalid input') {
            process.stderr.write('Invalid input\n');
        } else {
            process.stderr.write('Operation failed\n');
        }
    }
}
