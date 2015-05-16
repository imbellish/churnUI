// spec.js
describe('ChurnOver Application', function() {
    it('should have a title', function() {
        browser.get('http://localhost:8000/');
        expect(browser.getTitle()).toEqual('ChurnOver | Butter Location Research');
    });

    it('should show menu options', function(){
        element.all(by.css('.menuoptions')).then(function(items){
            expect(items.length).toBe(5);
        });
    });

    it('should change content tab when menu is clicked', function(){
        element.all(by.css('.menuoptions')).then(function(items){
            items[1].click();

        })
    });

    it('content tabs whould change when menu clicked', function(){
        var address = element(by.css("#content_tab_002"));
        address.click();
        var content = element(by.css(".byaddress"));
        expect(content).isDisplayed();

    })

});