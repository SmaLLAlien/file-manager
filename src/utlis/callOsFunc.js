import os from 'os';
import { OS_OPTIONS } from "../configs.js";

export const callOsFunc = (userOption) => {
    switch (userOption) {
        case OS_OPTIONS.eol: {
            process.stdout.write(`${JSON.stringify(os[OS_OPTIONS.eol])}\n`);
            return;
        }
        case OS_OPTIONS.cpus: {
            process.stdout.write(`${JSON.stringify(os[OS_OPTIONS.cpus]())}\n`);
            return;
        }
        case OS_OPTIONS.homedir: {
            process.stdout.write(`${os[OS_OPTIONS.homedir]()}\n`);
            return;
        }
        case OS_OPTIONS.username: {
            const userInfo = os.userInfo();
            const userName = userInfo?.username ? userInfo?.username : userInfo;
            process.stdout.write(`${JSON.stringify(userName)}\n`);
            return;
        }
        case OS_OPTIONS.architecture: {
            process.stdout.write(`${os.arch()}\n`);
            return;
        }
    }
}
