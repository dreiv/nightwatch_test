module.exports = {
	src_folders: ["tests"],
	output_folder: "reports",

	webdriver: {
		start_process: true,
		server_path: "/usr/bin/chromedriver",
		port: 9515,
		log_path: "./reports",
		"whitelisted-ips": "",
		verbose: true
	},

	test_settings: {
		default: {
			desiredCapabilities: {
				browserName: "chrome",
				javascriptEnabled: true,
				acceptSslCerts: true,
				acceptInsecureCerts: true,
				chromeOptions: {
					args: [
						"headless",
						"no-sandbox",
						"disable-gpu",
						"allow-insecure-localhost",
						"ignore-certificate-errors",
						"ignore-ssl-errors"
					],
					binary: "/usr/bin/chromium-browser"
				}
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
