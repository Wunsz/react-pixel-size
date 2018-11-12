describe('index.js', () => {
    it('exports `RulerPixelSize`', () => {
        expect.assertions(3);
        const files = import('./index');

        files.then((data) => {
            expect(typeof data.RulerPixelSize).toEqual('function');
            expect(typeof data.CardPixelSize).toEqual('function');
            expect(typeof data.DiagonalPixelSize).toEqual('function');
        });
    });
});
