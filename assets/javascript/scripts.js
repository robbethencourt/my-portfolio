// Javascript function that wraps everything
$(document).ready(function(){

	// scroll script for nav links
	$(".back-to-top").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({

	       scrollTop: $(hash).offset().top

	     }, 300, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;

	     }); // end animate

	}); // end scroll script

}); // end jQuery document ready

function expandingList() {
	
	var list_items = document.getElementsByClassName('list-item');

	var strike_throughs = document.getElementsByClassName('strike-th');

	var list_percent = document.getElementById('list-percent');

	var the_percent = (list_items.length - strike_throughs.length) / list_items.length;

	console.log(the_percent);

}

expandingList();