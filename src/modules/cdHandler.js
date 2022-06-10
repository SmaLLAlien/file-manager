export const cdHandler = (path) => {
    try {
        process.chdir(path);
    } catch (e) {
        process.stderr.write('Operation failed\n');
    }
}
