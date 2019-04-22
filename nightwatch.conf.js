const chromedriver = require("chromedriver")

module.exports = {
	src_folders: ["tests"],
	output_folder: "reports",

	webdriver: {
		start_process: true,
		server_path: chromedriver.path,
		port: 9515,
		log_path: "./reports"
	},

	test_settings: {
		default: {
			desiredCapabilities: {
				browserName: "chrome"
			},
			screenshots: {
				enabled: true,
				path: "./reports",
				on_failure: true,
				on_error: true
			}
		}
	}
}
