export function envkey(key: string): string {
    if (!process.env[key]) {
        throw new Error(`missing environment key ${key}`);
    }
    return process.env[key] as string;
}

export function parseEnvVar(key: string): string | number | boolean {
    const val = envkey(key);
    const base = 10;
    if (!isNaN(parseInt(val, base))) {
        return parseInt(val, base);
    } else if (val.toLowerCase() === 'true') {
        return true;
    } else if (val.toLowerCase() === 'false') {
        return false;
    } else { return val; }
}
