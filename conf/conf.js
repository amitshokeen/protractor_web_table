var AllureReporter = require('jasmine-allure-reporter');
exports.config = {
		
    //directConnect: true,

    
    multiCapabilities: [{
        browserName: 'chrome'
    },
    ],
    onPrepare: function () {
    
        global.first_names = [];
    
    
        //browser.ignoreSynchronization=true;

        //Override the timeout for webdriver.
        browser.driver.manage().timeouts().implicitlyWait(10000);
        //maximize the browser window
        browser.driver.manage().window().maximize();
        
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                return new Buffer(png, 'base64')
                }, 'image/png')();
            done();
            })
        });
    },

    framework: 'jasmine2',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    suites: {
		all: ['../test_spec/*.js']
	},
    jasmineNodeOpts: {
        defaultTimeoutInterval: 1*60*1000
    },

    
}