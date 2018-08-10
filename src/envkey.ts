export function envkey(key: string): string {
    if (!process.env[key]) {
        throw new Error(`missing environment key ${key}`);
    }

    return process.env[key] as string;
}
