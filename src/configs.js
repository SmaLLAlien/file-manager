const COMMANDS = {
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
}

const DEFAULT_USER_NAME = 'John Doe';

const ALLOWED_COMMANDS = [
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

export {COMMANDS, ALLOWED_COMMANDS, DEFAULT_USER_NAME}
