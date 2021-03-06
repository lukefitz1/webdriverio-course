browser.addCommand('isVideoPaused', function() {
	var isPaused = browser.execute(function() {
		var video = document.querySelector('#dance-video');
		return video.paused;
	})	
	
	return isPaused.value;
})

describe('About us video', function() {
	beforeEach(function() {
		browser.url('/');
		browser.click('=About Us');
	});

	it('should open the modal with the video paused', function() {
		var isPaused = browser.isVideoPaused();

		expect(isPaused.value).to.be.true;
	});

	it('play video by clicking play button', function() {
		browser.click('#play-btn');

		var isPaused = browser.isVideoPaused();
		expect(isPaused).to.be.false;
	});

	it('pause video on pause click', function() {
		browser.click('#play-btn');

		browser.pause(5000);

		browser.click('#pause-btn');

		var isPaused = browser.isVideoPaused();
		expect(isPaused).to.be.true;
	});
})