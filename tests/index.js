module.exports = {
	//Each "export" counts as one test case
	main: browser => {
		//We direct our browser to the example homepage, and wait for it to load
		browser
			// .url("https://staging.dlx.haufe.io")
			.url("https://staging.dlx.haufe.io/hello.html")
			// .url("http://127.0.0.1:8081/")
			// .url("http://example.com/")
			.pause(2000)
			.saveScreenshot("./reports/home.png")
			.source(result => {
				console.log(result.value)
			})
		//Once thats done, we close the browser
		browser.end()
	}
}
