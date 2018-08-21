/**
 * Created by Amit on 21/8/2018
 */

 var webTable_page = require('../pages/webTable_page.js');


describe("The web table can be edited and contents retained", function() {

    it("--> Edit all table rows and verify table contents", function(){
        
        webTable_page.browse_to_page();

        webTable_page.edit_web_table();

        webTable_page.verify_new_values_are_saved_for_each_user();

    });

    it("--> Refresh the page and ensure the new values are retained", function() {
            
            webTable_page.refresh_page();
            
            //The below step will fail as the refreshed page does not retain the saved changes.
            webTable_page.verify_new_values_are_saved_for_each_user();

    });

});