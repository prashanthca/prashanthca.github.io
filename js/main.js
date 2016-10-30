$(document).ready(function(){
	$("#portfolio-items .portfolio-item").mouseover(function(){
		$(this).find(".portfolio-item-hover").show();
	}).mouseout(function(){
		$(this).find(".portfolio-item-hover").hide();
	});

	$("#top-header-bar-nav li").click(function(){
		$('html, body').animate({
			scrollTop: $("#"+$(this).attr("tar")).offset().top
		}, 2000);
	})
});