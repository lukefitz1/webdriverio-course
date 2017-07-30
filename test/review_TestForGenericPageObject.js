var request = require('sync-request');
var reviewForm = require('./reviewForm_page.js');
var Review = require('./Review_page.js');

describe('The product review form', function() {
	beforeEach(function() {
		browser.url('/product-page.html');
	});

	it('should add review when submitted properly', function() {
		//custom command
		browser.submitReview('email@example.com', 'This is a review');
		
		var hasReview = browser.isExisting(".comment=This is a review");
		expect(hasReview, "comment text exists").to.be.true;
	});

	it('should show an error message if the input is wrong', function() {
		var isErrorShowing = browser.isVisible("p=There are some errors in your review.");
		expect(isErrorShowing).to.be.false;

		//custom command
		browser.submitReview();

		var isErrorShowing = browser.isVisible("p=There are some errors in your review.");
		expect(isErrorShowing).to.be.true;
	});

	it('should hide the error message when input is corrected', function() {
		browser.submitReview();

		var isErrorShowing = browser.isVisible("p=Please enter a valid email address.");
		expect(isErrorShowing).to.be.true;

		browser.submitReview("email@example.com");

		var isErrorShowing = browser.isVisible("p=Please enter a valid email address.");
		expect(isErrorShowing).to.be.false;

		browser.submitReview("email@example.com", "This is the review");

		var isMainErrorShowing = browser.isVisible("p=There are some errors in your review.");
		var isContentErrorShowing = browser.isVisible("A review without text isn't much of a review");

		expect(isMainErrorShowing).to.be.false;
		expect(isContentErrorShowing).to.be.false;
	});

	it('should focus on the first invalid input field on error', function() {
		var emailHasFocus = browser.hasFocus("#review-email");
		expect(emailHasFocus, "email should not have focus").to.be.false;

		//custom command
		browser.submitReview();

		var emailHasFocus = browser.hasFocus("#review-email");
		expect(emailHasFocus, "email should now have focus").to.be.true;

		//custom command
		browser.submitReview('example@email.com');

		var contentHasFocus = browser.hasFocus("#review-content");
		expect(contentHasFocus, "review content field should have focus");
	});

	it.only('should allow multiple reviews', function() {
		var res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
    	var comments = JSON.parse(res.getBody().toString('utf8'));

		comments.forEach(function (comment, idx) {
	        reviewForm.submit(comment.email, comment.name);
	        var review = new Review (idx + 3);

	        var email = review.email.getText();
	        expect(email).to.equal(comment.email);

	        var reviewText = review.getText();
	        expect(reviewText).to.equal(comment.name);
	    })
	});
});