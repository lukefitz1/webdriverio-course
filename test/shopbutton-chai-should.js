require('chai').should();

describe("Shop CTA Button", function () {
    it("should link to the product page", function () {
        browser.url('/');

        var title = browser.getTitle()
        //console.log('Title is: ' + title);
        title.should.equal('Robot Parts Emporium')

        browser.click('.shop-callout a');

        var productTitle = browser.getTitle()
        //console.log('Title is: ' + productTitle);
        productTitle.should.equal('Totally Not Evil Sentient Robot - Robot Parts Emporium');

        var url = browser.getUrl();
        //console.log('Url is: ' + url);
        url.should.include('product-page.html', 'URL mismatch');
    });
});