var portfolios = {"eventscell":{"name":"EventsCell.com", "link":"http://eventscell.com", "desc":"", "ss": "eventscell_ss"}, "bsi": {"name":"Building Stock Inventory", "link":"", "desc":"", "ss": "bsi_ss"}, "charity": {"name":"Charity Web Design", "link":"", "desc":"", "ss": "charity_ss"}, "derextech":{"name":"DerexTech.com", "link":"http://derextech.com", "desc":"", "ss": "derextech_ss"} };
$(document).ready(function(){
	$("#portfolio-items .portfolio-item").mouseover(function(){
		$(this).find(".portfolio-item-hover").show();
	}).mouseout(function(){
		$(this).find(".portfolio-item-hover").hide();
	});

	$("#portfolio-items .portfolio-item").click(function(){
		var id = $(this).attr("id");
		var details = portfolios[id];
		$("#popup_container").empty().append("<span id='popup_close'></span><div class='wrapper' id='portfolio_item_details_container'><div id='portfolio_item_details'><div id='portfolio_item_details_info'><span class='image' style='background-image:url(/img/portfolios/"+id+"_thumb.png)'></span><div class='image_desc'>"+details.desc+"<span class='image_desc_title'>"+details.name+"</span><span class='image_desc_link'><a href='"+details.link+"'>"+details.link+"</a></span><p class='image_desc_text'></p></div></div><div id='portfolio_item_details_ss'><div id='portfolio_ss_slideshow'><img src='/img/portfolios_ss/"+details.ss+".jpg' class='portfolio_ss_slideshow_item'/></div></div></div></div>").attr("state", "o").show();
		$("#portfolio_ss_slideshow").jScrollPane({
			contentWidth: '800px',
			autoReinitialise: true
		});
		$("#popup_close").click(function(){
			if($("#popup_container").attr("state") == "o")
			{
				$("#popup_container").empty().fadeOut();
			}
		});
	});
	$("#top-header-bar-nav li").click(function(){
		$('html, body').animate({
			scrollTop: $("#"+$(this).attr("tar")).offset().top
		}, 2000);
	});
	$("#c_form_submit").click(function(){
		if($.grep($("#contact_me_form .required_text_box"), function(item){ if($(item).next().val()) return true; return false; }).length != $("#contact_me_form .required_text_box").length) return false;
		var structData = {};
		$("#contact_me_form .text_box").each(function(){
			structData[$(this).attr("name")] = $(this).val();
		});
		$.ajax({
			url:"https://script.google.com/macros/s/AKfycbzhTTenX7YxRodvtHgJ1S9HtZD7rjoLqmUHypQok7fENCiiXtpH/exec",
			type:"POST",
			data: structData,
			beforeSend: function(){
				$("#c_form_submit").text("Sending");
			},
			success: function(data){
				$("#c_form_submit").text("Send");
			}
		});
	});
});