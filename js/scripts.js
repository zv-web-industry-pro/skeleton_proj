$(document).load(function() {

});

$(document).ready(function($) {
	console.log('JS ready');
	
	$('#readMoreExemple').readmore({
	        speed: 100,
	        collapsedHeight: 150,
	        heightMargin: 16,
	        moreLink: '<a href="#">Читать еще</a>',
	        lessLink: '<a href="#">Прочитал, убрать</a>'
	    });

	
});




$(window).resize(function() {
	clearTimeout(window.resizedFinished);
	window.resizedFinished = setTimeout(function(){
		// исполняемый код тут
	}, 250);
});

$(window).scroll(function(event) {
	// if($(window).scrollTop() > 0){
	
	// }
});



var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var tech = getUrlParameter('technology');
