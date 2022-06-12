import { DEFAULT_USER_NAME } from "../configs.js";

export const getUser = (args) => {
    let user = null;
    args.forEach(arg => {
        const val = arg.split('=');
        if (val[0]?.trim() === '--username') {
            user = val[1].trim();
        }
    });
    return user || DEFAULT_USER_NAME;
}
