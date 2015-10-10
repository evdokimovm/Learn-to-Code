// $(document).ready(function(){
// 	$('#one').after('<p>To add</p>');
// 	var $paragraph = $("p")
// 	$("#two").after($paragraph);
// });

$(document).ready(function(){
	$('#one').after('<p>To add</p>');
	var $paragraph = $("p")
	$("#two").after($paragraph);
	$('p').remove();
});
