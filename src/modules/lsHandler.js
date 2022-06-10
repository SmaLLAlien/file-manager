import { readdir } from 'fs/promises';
import { statSync } from 'fs';

export const LsHandler = async () => {
    try {
        const currPath = process.cwd();
        let files = await readdir(currPath);

        files = files.map(file => statSync(file).isDirectory() ? `${file}/` : file);

        process.stdout.write(`${files.join(',   ')}\n`)
    } catch (e) {
        console.log(e);
        process.stderr.write('Operation failed\n');
    }
}
