// spec.js

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}


describe('ChurnOver Application', function() {
    it('should have a title', function() {
        // run http-server -a localhost -p 8000 on the /app/ directory
        browser.get('http://localhost:8000/index2.html');
        expect(browser.getTitle()).toEqual('ChurnOver | Butter Location Research');
    });

    it('should show menu options', function(){
        element(by.css("#tab_002")).click();
        element(by.css('.menu')).click();
        //sleepFor(100);
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
                //element(by.css(".logo img")).click();
                //element(by.css('.menu')).click();
                expect(element(by.css("."+expectedClassnames[i]))).toBeTruthy();
                //element(by.css('.menu')).click();

            }
        });
    });
});