export const writeCurrDirectory = () => {
    process.stdout.write(`You are currently in ${process.cwd()} directory \n`);
}
