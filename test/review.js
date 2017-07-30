describe('The product review form', function() {
	beforeEach(function() {
		browser.url('/product-page.html');
	});

	it('should add review when submitted properly', function() {
		browser.setValue('#review-email', 'email@example.com');
		browser.setValue('#review-content', 'This is a review');
		browser.submitForm('#review-content');

		//browser.debug();

		var hasReview = browser.isExisting(".comment=This is a review");
		expect(hasReview, "comment text exists").to.be.true;
	});

	it('should show an error message if the input is wrong', function() {
		var isErrorShowing = browser.isVisible("p=There are some errors in your review.");
		expect(isErrorShowing).to.be.false;

		browser.submitForm('#review-content');

		var isErrorShowing = browser.isVisible("p=There are some errors in your review.");
		expect(isErrorShowing).to.be.true;
	});

	it('should hide the error message when input is corrected', function() {
		browser.submitForm('#review-content');

		var isErrorShowing = browser.isVisible("p=Please enter a valid email address.");
		expect(isErrorShowing).to.be.true;

		browser.setValue("#review-email", "email@example.com");

		//move focus
		browser.click("#review-content");

		var isErrorShowing = browser.isVisible("p=Please enter a valid email address.");
		expect(isErrorShowing).to.be.false;

		browser.setValue("#review-content", "valid");
		browser.submitForm("#review-content");

		var isMainErrorShowing = browser.isVisible("p=There are some errors in your review.");
		var isContentErrorShowing = browser.isVisible("A review without text isn't much of a review");

		expect(isMainErrorShowing).to.be.false;
		expect(isContentErrorShowing).to.be.false;
	});

	it.only('should focus on the first invalid input field on error', function() {
		var emailHasFocus = browser.hasFocus("#review-email");
		expect(emailHasFocus, "email should not have focus").to.be.false;

		browser.submitForm("form");

		var emailHasFocus = browser.hasFocus("#review-email");
		expect(emailHasFocus, "email should now have focus").to.be.true;

		browser.setValue("#review-email", "valid@example.com");
		browser.submitForm("form");

		var contentHasFocus = browser.hasFocus("#review-content");
		expect(contentHasFocus, "review content field should have focus");
	});


});