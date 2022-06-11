export const COMMANDS = {
    up: 'up',
    cd: 'cd',
    ls: 'ls',
    cat: 'cat',
    add: 'add',
    rn: 'rn',
    cp: 'cp',
    mv: 'mv',
    rm: 'rm',
    os: 'os',
    hash: 'hash',
    compress: 'compress',
    decompress: 'decompress',
};

export const DEFAULT_USER_NAME = 'John Doe';

export const ALLOWED_COMMANDS = [
    COMMANDS.up,
    COMMANDS.cd,
    COMMANDS.ls,
    COMMANDS.cat,
    COMMANDS.add,
    COMMANDS.rn,
    COMMANDS.cp,
    COMMANDS.mv,
    COMMANDS.rm,
    COMMANDS.os,
    COMMANDS.hash,
    COMMANDS.compress,
    COMMANDS.decompress,
];

export const OS_OPTIONS = {
    eol: 'EOL',
    cpus: 'cpus',
    homedir: 'homedir',
    username: 'username',
    architecture: 'architecture',
};

export const ALLOWED_OS_OPTIONS = [
    OS_OPTIONS.eol,
    OS_OPTIONS.cpus,
    OS_OPTIONS.homedir,
    OS_OPTIONS.username,
    OS_OPTIONS.architecture,
];
