// spec.js

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}


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
        var expectedClassnames = [
            'home',
            'byaddress',
            'byzip',
            'byagent',
            'contact'
        ];
        element.all(by.css('.menuoptions')).then(function(items){
            for (i = 0; i < items.length; i ++){
                items[i].click();
                sleepFor(50);
                expect(element(by.css("."+expectedClassnames[i]))).toBeTruthy();
            }
        });
    });
});