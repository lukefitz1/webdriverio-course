describe('The product review form', function() {
	it('should add review when submitted properly', function() {
		browser.url('/product-page.html');
	
		browser.setValue('#review-email', 'email@example.com');
		browser.setValue('#review-content', 'This is a review');
		browser.submitForm('#review-content');

		//browser.debug();

		var hasReview = browser.isExisting(".comment=This is a review");
		expect(hasReview, "comment text exists").to.be.true;
	});


});