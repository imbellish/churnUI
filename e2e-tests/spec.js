// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://localhost:8000/');

        expect(browser.getTitle()).toEqual('ChurnOver | Butter Location Research');
    });
});