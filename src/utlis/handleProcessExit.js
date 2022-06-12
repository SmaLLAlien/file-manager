let isLastMsgAlreadyShowed = false;

export const handleProcessExit = (code, user) => {
    if (!isLastMsgAlreadyShowed) {
        process.stdout.write(`Thank you for using File Manager, ${user}!\n`);
        isLastMsgAlreadyShowed = true;
    }
    process.exit(code);
};
