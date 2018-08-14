import { expect } from 'chai';
import { envkey, parseEnvVar } from './envkey';

describe('envkey', () => {
    it('should return request environment key', () => {
        const KEY = 'THIS_IS_A_KEY';
        process.env[KEY] = 'foo';
        expect(envkey(KEY)).to.equal('foo');
    });

    it('should throw error on non-existing environment key', () => {
        expect(() => envkey('THIS_DOES_NOT_EXIST')).to.throw('missing environment key');
    });

    it('envkey parse as string succeeds', () => {
        process.env.ABCDEFG2 = 'Dit is ook een test';
        expect(parseEnvVar('ABCDEFG2')).to.equal('Dit is ook een test');
    });

    it('envkey parse as boolean true succeeds', () => {
        process.env.ABCDEFG3 = 'true';
        const expectation = true;
        expect(parseEnvVar('ABCDEFG3')).to.equal(expectation);
    });

    it('envkey parse as boolean false succeeds', () => {
        process.env.ABCDEFG4 = 'false';
        const expectation = false;
        expect(parseEnvVar('ABCDEFG4')).to.equal(expectation);
    });

    it('envkey parse as number succeeeds', () => {
        process.env.ABCDEFG5 = '100';
        const expectation = 100;
        expect(parseEnvVar('ABCDEFG5')).to.equal(expectation);
    });
});
