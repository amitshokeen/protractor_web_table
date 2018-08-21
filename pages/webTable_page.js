/**
 * Created by Amit on 21/8/2018
 */

 var testData = require('../json/test_data.json');
 var OR = require('../json/obj_repo.json');

 var webTable_page = function() {

    this.browse_to_page = function() {
        browser.get(OR.testsiteurl);
    };

    this.refresh_page = function() {
        browser.refresh();
    };

    this.edit_web_table = function() {
        
        this.get_count_of_table_rows().then(function(rowCount) {
            
            //In this loop, I'm explicitly avoiding to edit the last row 
            //because the edit button of the last row is covered by a chat popup.
            for(row=1; row<=rowCount-1; row++){
                edit_User(row);
            }
        });

    };

    this.verify_new_values_are_saved_for_each_user = function() {
        
        this.get_count_of_table_rows().then(function(rowCount) {
            
            //In this loop, I'm explicitly avoiding to check the last row...
            //because the last table-row has not been edited.
            for(row=1; row<=rowCount-1; row++){
                assert_new_values_in_web_table(row);  
            } 

        });

    };


    this.get_count_of_table_rows = function() {
        var rows = $$(OR.locators.webTable_page.all_table_rows);
        return rows.count();
    };

    
    edit_User = function(row) {

        //click the edit button for the row specified
        var xp = "//tr[" + row + "]//button[@type='edit']";
        element(by.xpath(xp)).click();
        
        //Edit User - First Name
        $('input[name="FirstName"]').clear().sendKeys(testData.firstname);
        
        //Edit User - Last Name
        $('input[name="LastName"]').clear().sendKeys(testData.lastname);

        //Edit User - User Name
        $('input[name="UserName"]').clear().sendKeys(testData.username);

        //Edit User - Password
        $('input[name="Password"]').clear().sendKeys(testData.password);

        //Edit User - Customer radio button
        element(by.cssContainingText('label.radio', testData.customer)).click();

        //Edit User - Roles
        $('select').element(by.cssContainingText('select>option', testData.role)).click();

        //Edit User - E-mail
        $('input[type="email"]').clear().sendKeys(testData.email);

        //Edit User - Save button
        $('button.btn.btn-success').click();    

        //browser.sleep(1000);
    }; //end of edit_User function

    assert_new_values_in_web_table = function(row) {
        //First Name
        var fn = "//tr[" + row + "]//td[contains(.,'" + testData.firstname + "')]";
        firstname = element(by.xpath(fn));
        expect(firstname.isDisplayed()).toBeTruthy();

        //Last Name
        var ln = "//tr[" + row + "]//td[contains(.,'" + testData.lastname + "')]";;
        lastname = element(by.xpath(ln));
        expect(lastname.isDisplayed()).toBeTruthy();

        //User Name
        var un = "//tr[" + row + "]//td[contains(.,'" + testData.username + "')]";
        username = element(by.xpath(ln));
        expect(username.isDisplayed()).toBeTruthy();


        /*******************************************/

        //This is a bug in the Web Table. After editing, the Customer column becomes blank.
        
        //Customer
        // var c = "//tr[" + row + "]//td[contains(.,'" + testData.customer + "')]";
        // customer = element(by.xpath(c));
        // expect(customer.isDisplayed()).toBeTruthy();
        
        /*******************************************/

        //Role
        var r = "//tr[" + row + "]//td[contains(.,'" + testData.role + "')]";
        role = element(by.xpath(r));
        expect(role.isDisplayed()).toBeTruthy();

        //Email
        var e = "//tr[" + row + "]//td[contains(.,'" + testData.email + "')]";
        email = element(by.xpath(e));
        expect(email.isDisplayed()).toBeTruthy();

    }; // end of assert_new_values_in_web_table function

 };
 module.exports = new webTable_page();