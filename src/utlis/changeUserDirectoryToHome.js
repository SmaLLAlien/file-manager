import {homedir} from "os";

export const changeUserDirectoryToHome = () => {
    process.chdir(homedir());
}
