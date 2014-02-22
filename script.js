$(document).ready(function() {

$('form').submit(function(e){
    e.preventDefault();
	doSearch();
});

$('input').keypress(function(e){
    if(e.keyCode == 13){
	    e.preventDefault();
        doSearch();
    }
});

});

//change to your account id at bigstock.com/partners
var account_id = '976933';

	
	function doSearch() {
	
	var params = {};
	var listform = document.getElementById("myList");
    var input1 = listform.elements[0].value; //input from city text box
	
	
		
        $.getJSON("https://maps.googleapis.com/maps/api/place/textsearch/json?&query=restaurants+in+Sydney&sensor=true&key=AIzaSyBeKdHLRlRU12a16F6mdIBryn2MZSZJE74", params, function(){
            
			/*$('#results').empty();*/
			
			/*for (i = 0; i < myJSONResult.results.length; i++) {
  myAddress[i] = myJSONResult.results[i].formatted_address;
}*/
            /*for(x in data.response.groups.items){
			    
			    $('#results').append('<p>' + response.groups.items[x].venue.name + '</p>');
            }*/
			
	$('#results').append('<p>' + results[0].formatted_address + '</p>');
			
            
			$('#city').val("");
			
			  
        });
	
}//end doSearch function