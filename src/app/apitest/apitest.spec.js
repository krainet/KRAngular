describe('apitest section', function () {
    beforeEach(module('KRAngular.apitest'));

    it('should have a dummy test', inject(function() {
        expect(true).toBeTruthy();
    }));
});