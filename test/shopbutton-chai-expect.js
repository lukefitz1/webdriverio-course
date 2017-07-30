// var expect = require('chai').expect;

describe("Shop CTA Button", function () {
    this.timeout(30000);

    it("should link to the product page", function () {
        browser.url('/');

        var title = browser.getTitle()
        //console.log('Title is: ' + title);
        expect(title).to.equal('Robot Parts Emporium')

        var results = browser.checkElement('.shop-callout a');
        console.log(results);
        expect(results[0].isWithinMisMatchTolerance).to.be.true;

        browser.click('.shop-callout a');

        var productTitle = browser.getTitle()
        //console.log('Title is: ' + productTitle);
        expect(productTitle).to.equal('Totally Not Evil Sentient Robot - Robot Parts Emporium');

        var url = browser.getUrl();
        //console.log('Url is: ' + url);
        expect(url).to.include('product-page.html', 'URL mismatch');
    });
});