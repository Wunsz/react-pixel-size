import {uniqid} from './utils';

describe('utils.js', () => {
    it('calculates different id each time', () => {
        const a = uniqid();
        const b = uniqid();
        const c = uniqid();

        expect(a).not.toEqual(b);
        expect(a).not.toEqual(c);
        expect(c).not.toEqual(b);
    });
});
