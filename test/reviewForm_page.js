class ReviewForm {
	get form() { return $('#comment-form'); }
	get email() { return $('#review-email'); }
	get content() { return $('#review-content'); }

	submit(email, review) {
		if (email) {
			//Enter review email into input field
			this.email.setValue(email);
		}
		if (review) {
			//Enter review text into input field
			this.content.setValue(review);
		}

		//submit review
		this.form.submitForm();
	}
}

module.exports = new ReviewForm();