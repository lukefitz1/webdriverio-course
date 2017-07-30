describe("Shop CTA Button", function () {
    it("should link to the product page", function () {
        browser.url('/');

        var title = browser.getTitle()
        //console.log('Title is: ' + title);
        expect(title).to.equal('Scout bags')

        browser.click('.shop-callout a');

        /* 
        * This debug statement allows you to pause test execution, so that you can interact with your browser during the test
        * It will pause the test for however long the timeout is set for. By configuring the wdio.conf.js file,
        * you can pass a DEBUG env variable in during the test, to extend the timeout for that particular test
        * 'DEBUG=true npm test'
        * Docs -> http://webdriver.io/api/utility/debug.html
        */
        browser.debug();

        var productTitle = browser.getTitle()
        //console.log('Title is: ' + productTitle);
        expect(productTitle).to.equal('Totally Not Evil Sentient Robot - Robot Parts Emporium');

        var url = browser.getUrl();
        //console.log('Url is: ' + url);
        expect(url).to.include('product-page.html', 'URL mismatch');
    });
});