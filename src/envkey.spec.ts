import { envkey } from './envkey';

import { expect } from 'chai';

describe('envkey', () => {
    it('should return request environment key', () => {
        const KEY = 'THIS_IS_A_KEY';
        process.env[KEY] = 'foo';
        expect(envkey(KEY)).to.equal('foo');
    });
    it('should throw error on non-existing environment key', () => {
        expect(() => envkey('THIS_DOES_NOT_EXIST')).to.throw('missing environment key');
    });
});
