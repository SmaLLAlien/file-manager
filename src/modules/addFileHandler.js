import { writeFile } from 'fs/promises';

export const addFileHandler = async (fileName) => {
    try {
        if (!fileName) {
            throw Error('Invalid input');
        }
        await writeFile(fileName, '', { flag: 'wx' });
    } catch (e) {
        if (e.message === 'Invalid input') {
            process.stderr.write('Invalid input\n');
        } else {
            process.stderr.write('Operation failed\n');
        }
    }
}
