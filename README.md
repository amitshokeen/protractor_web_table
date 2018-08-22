# protractor_web_table
Testing a web table on an AngularJS web page. URL: http://www.way2automation.com/angularjs-protractor/webtables/

To run the test:
1. open a command window and run the command: 'webdriver-manager start' - this will start the webdriver manager.
2. use another command window to navigate to the project root
3. after all packages are updated and the node_modules dir is created, change directory to conf
4. run the command 'protractor conf.js'
5. the test run finishes in about 30 secs. on the Chrome browser.
6. there are two tests in a single spec file 'test_spec.js' 
7. the first test '--> Edit all table rows and verify table contents' will pass. Note that I have ignored a bug related to the Customer column of the web table. This has been noted in the webTable_page.js file.
8. the second test '--> Refresh the page and ensure the new values are retained' will fail. This is because the page does not retain the new changes made to the web table. In a proper application, it can be expected that the saved changes are available after the refresh of the page, but this does not happen in this sample. Hence, the 'it' block fails.
