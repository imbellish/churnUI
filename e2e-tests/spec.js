// spec.js
describe('ChurnOver Application', function() {
    it('should have a title', function() {
        browser.get('http://localhost:8000/');

        expect(browser.getTitle()).toEqual('ChurnOver | Butter Location Research');
    });
    it('should show different search parameters', function(){
        var address = element(by.buttonText("Search By Address"));
        var content = webdriver.By.id("content-body");
        address.click();

        //expect(content.contains())

    })
});