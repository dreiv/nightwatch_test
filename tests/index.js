module.exports = {
	//Each "export" counts as one test case
	main: browser => {
		//We direct our browser to the example homepage, and wait for it to load
		browser.url("http://example.com/").waitForElementVisible("body", 1000)

		// We then test to see that the Header is visible
		browser.assert.elementPresent("h1").saveScreenshot("./reports/loaded.png")

		//Once thats done, we close the browser
		browser.end()
	}
}
