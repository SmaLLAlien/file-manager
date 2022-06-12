import { stat } from 'fs/promises';

export const isFileExists = async (path) => {
    try {
        await stat(path);
        return true;
    } catch (error) {
        return false;
    }
};
