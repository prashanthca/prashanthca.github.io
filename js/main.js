var portfolios = {"eventscell":{"name":"EventsCell.com","link":"http://eventscell.com","desc":"","ss":"eventscell_ss"},"bsi":{"name":"Building Stock Inventory","link":"","desc":"","ss":"bsi_ss"},"charity":{"name":"Charity Web Design","link":"","desc":"","ss":"charity_ss"},"derextech":{"name":"DerexTech.com","link":"http://derextech.com","desc":"","ss":"derextech_ss"},"invictolimited":{"name":"Invicto Limited","link":"http://invictolimited.com","desc":"","ss":"invictolimited_ss"},"prgroups":{"name":"PRGroups","link":"http://prgroups.in","desc":"","ss":"prgroups_ss"}};
$(document).ready(function(){
	$("#portfolio-items .portfolio-item").mouseover(function(){
		$(this).find(".portfolio-item-hover").show();
	}).mouseout(function(){
		$(this).find(".portfolio-item-hover").hide();
	});

	$("#portfolio-items .portfolio-item").click(function(){
		var id = $(this).attr("id");
		var details = portfolios[id];
		$("#popup_container").empty().append("<div class='container' id='portfolio_item_details_container'><div id='portfolio_item_details'><div id='portfolio_item_details_info' class='row'><i id='popup_close' class='fa fa-times'></i><div class='col-md-auto'><span class='image' style='background-image:url(/img/portfolios/"+id+"_thumb.png)'></span></div><div class='col-md-auto image_desc'>"+details.desc+"<span class='image_desc_title'>"+details.name+"</span><span class='image_desc_link'><a href='"+details.link+"'>"+details.link+"</a></span></div></div><div id='portfolio_item_details_ss'><div id='portfolio_ss_slideshow'><img src='/img/portfolios_ss/"+details.ss+".jpg' class='portfolio_ss_slideshow_item'/></div></div></div></div>").attr("state", "o").show();

		$("#popup_close").click(function(e){
			if($("#popup_container").attr("state") == "o")
			{
				$("#popup_container").empty().fadeOut();
			}
		});
		$("#portfolio_item_details_container").data("scrollbar", new PerfectScrollbar('#portfolio_item_details_container', {
			wheelSpeed: 2,
			wheelPropagation: true,
			minScrollbarLength: 20
		}));
	});

	$("#top-header-bar-nav li").click(function(){
		$('html, body').animate({
			scrollTop: $("#"+$(this).attr("tar")).offset().top
		}, 2000);
	});
	$("#c_form_submit").click(function(){
		if($.grep($("#contact_me_form .required_text_box"), function(item){ if($(item).next().val()) return true; return false; }).length != $("#contact_me_form .required_text_box").length) {
			alert("Please enter all the required fields");
			return false;
		}
		var structData = {"form":{}};
		$("#contact_me_form .text_box").each(function(){
			var name = $(this).attr("name").split("c_")[1];
			structData["form"][name] = $(this).val();
		});
		$.ajax({
			url:"https://herve.prashanthca.in/api/forms/submit/contactme?token=8ac18a805dda3f7cd23a98d7353d99",
			type:"POST",
			data: structData,
			beforeSend: function(){
				$("#c_form_submit").text("Sending");
			},
			success: function(data){
				$("#c_form_submit").text("Send");
				$("#contact_me_form .text_box").each(function(){ $(this).val(""); });
			}
		});
	});
});