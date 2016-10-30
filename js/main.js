$(document).ready(function(){
	$("#portfolio-items .portfolio-item").mouseover(function(){
		$(this).find(".portfolio-item-hover").show();
	}).mouseout(function(){
		$(this).find(".portfolio-item-hover").hide();
	});
});