$(document).ready(function() {
	$("#text").click(function() {
		$(this).addClass("highlighted"); // toggleClass
		$('#title').removeClass("highlighted");
	});
	$("#title").click(function() {
		$(this).addClass("highlighted");
		$('#text').removeClass("highlighted");
	});
});
