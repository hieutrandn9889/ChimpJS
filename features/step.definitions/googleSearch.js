module.exports = function() {
	this.Given(/^I navigate to "([^"]*)"$/, function(pageUrl) {
		console.log(pageUrl);
		browser.url(pageUrl)
	});

	this.When(/^I can search for "([^"]*)"$/, function(searchTerm) {
		browser.setValue('input[name="q"]', searchTerm);
		browser.keys(['Enter']);
	});

	this.Then(/^I am presented with pages about "([^"]*)"$/, function(link) {
//		browser.waitForExist('a*-' + link,1000);
//		var text = browser.getText('a*=' + link);
		console.log(link);
	});
	
	this.Then(/^I close browser$/, function () {
        browser.quit();
      });

};
