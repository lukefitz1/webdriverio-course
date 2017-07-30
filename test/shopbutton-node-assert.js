var assert = require('assert');

describe("Shop CTA Button", function () {
    it("should link to the product page", function () {
        browser.url('/');

        var title = browser.getTitle()
        //console.log('Title is: ' + title);
        assert.equal(title, 'Robot Parts Emporium');

        browser.click('.shop-callout a');

        var productTitle = browser.getTitle()
        //console.log('Title is: ' + productTitle);
        assert.equal(productTitle, 'Totally Not Evil Sentient Robot - Robot Parts Emporium');

        var url = browser.getUrl();
        //console.log('Url is: ' + url);
        var containsFile = url.includes('product-page.html');
        assert.ok(containsFile, 'URL mismatch');
    });
});