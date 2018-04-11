module.exports = {
	// ----- CUCUMBER ----
		path: './features',
		format: 'pretty',
		tags: '~@ignore',
		recommendedFilenameSeparator: '_',
		screenshotsOnError: true,
		screenshotsPath: 'screenshots',
		captureAllStepScreenshots: false,
		saveScreenshotsToDisk: true,
		saveScreenshotsToReport: true,
		jsonOutput: 'test.json'	
};
