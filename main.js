$(document).ready(function(){
	//slider
	var swiper_wrapper = $(".swiper-wrapper"),
		slide = $(".swiper-slide"),
		slides = slide.length,
		bullet = $(".bullet"),
		width = 1;

	function startSlider(){
		interval = setInterval(function(){
			swiper_wrapper.css("transform","translate3d(-"+width+"00%, 0px, 0px)");
			width++;
			var next_bullet = $(".current + .bullet");
			$(".bullet").removeClass("current");
			next_bullet.addClass("current");

			if(width > slides){
				width = 1;
				$(".bullet:first").addClass("current");
				swiper_wrapper.css("transform","translate3d(0px, 0px, 0px)");
			}
		}, 3000);
	}

	startSlider();

	function stopSlider(){
		clearInterval(interval);
	}

	bullet.on("click", function(e){
		stopSlider();
		bullet.removeClass("current");
		$(this).addClass("current");
		var which = $(this).index();
		swiper_wrapper.css("transform","translate3d(-"+which+"00%, 0px, 0px)");
	});


	

});