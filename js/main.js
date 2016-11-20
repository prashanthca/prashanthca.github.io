var portfolios = {"eventscell":{"name":"EventsCell.com", "link":"http://eventscell.com", "desc":"", "ss": "eventscell_ss"}, "bsi": {"name":"Building Stock Inventory", "link":"", "desc":"", "ss": "bsi_ss"}, "charity": {"name":"EventsCell.com", "link":"", "desc":"", "ss": "charity_ss"}, "derextech":{"name":"DerexTech.com", "link":"http://derextech.com", "desc":"", "ss": "derextech_ss"} };
$(document).ready(function(){
	$("#portfolio-items .portfolio-item").mouseover(function(){
		$(this).find(".portfolio-item-hover").show();
	}).mouseout(function(){
		$(this).find(".portfolio-item-hover").hide();
	});
	$("#portfolio-items .portfolio-item").click(function(){
		var details = portfolios[$(this).attr("id")];
		$("#popup_container").empty().append("<span id='popup_close'></span><div class='wrapper' id='portfolio_item_details_container'><div id='portfolio_item_details'><div id='portfolio_item_details_info'><span class='image'></span><div class='image_desc'>"+details.desc+"<span class='image_desc_title'>"+details.name+"</span><span class='image_desc_link'><a href='"+details.link+"'>"+details.link+"</a></span><p class='image_desc_text'></p></div></div><div id='portfolio_item_details_ss'><div id='portfolio_ss_slideshow'><img src='/img/portfolios_ss/"+details.ss+".jpg' class='portfolio_ss_slideshow_item'/></div></div></div></div>").attr("state", "o");
		$("#portfolio_item_details_ss").jScrollPane({
			contentWidth: '800px'
		});
	});
	$("#popup_close").click(function(){
		if($("#popup_container").attr("state") == "o")
		{
			$("#popup_container").empty().fadeOut();
		}
	});
	$("#top-header-bar-nav li").click(function(){
		$('html, body').animate({
			scrollTop: $("#"+$(this).attr("tar")).offset().top
		}, 2000);
	});
});