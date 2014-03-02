$(document).ready(function(){
	$("ul.menu li a").click(function(){
		$("ul.menu li a").css("color","#9AA9C9");
		$(this).css("color","#FFFFFF");

	});
	$("ul.menu2 li.button").click(function(){
		$("ul.menu2 li.button").removeClass("highlighted");
		$(this).addClass("highlighted");
	});
	$("#slider-img").click(function(){
		if($(this).hasClass('hide')){
			$( ".left-pannel-container" ).animate({
			    width: "200px"
			  }, 200 );
			$(".timeline-container").animate({
				marginLeft: "200px"
			},200);
			$(".feed-buttons").animate({
				marginRight: "200px"
			},200);
			$(this).removeClass('hide');
		}else{
			$( ".left-pannel-container" ).animate({
			    width: "0"
			  }, 200 );
			$(".timeline-container").animate({
				marginLeft: "0"
			},200);
			$(".feed-buttons").animate({
				marginRight: "0px"
			},200);
			$(this).addClass('hide');
		}
		

	});

});