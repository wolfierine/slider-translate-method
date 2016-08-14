$(document).ready(function(){
	//slider
	var swiper_wrapper = $(".swiper-wrapper");
	var slide = $(".swiper-slide");
	var bullet = $(".bullet");
	var current = $(".current");
	var next = current.next();
	var whichslide = slide.index();
	var width = 1;
	var currentSlide = 1;
	var slides = slide.length;
	var bullets = bullet.length;
	function startSlider(){
		interval = setInterval(function(){
			swiper_wrapper.css("transform","translate3d(-"+width+"00%, 0px, 0px)");
			currentSlide++;
			width++;
			var sib = $(".current + .bullet");
			$(".bullet").removeClass("current");
			sib.addClass("current");

			if(currentSlide > slides){
				currentSlide = 1;
				width = 1;
				$(".bullet:first").addClass("current");
				swiper_wrapper.css("transform","translate3d(0px, 0px, 0px)");
			}
		}, 5000);
	}

	startSlider();

	function stopSlider(){
		clearInterval(interval);
	}

	bullet.on("click", function(e){
		stopSlider();
		$(".bullet").removeClass("current");
		$(this).addClass("current");
		var which = $(this).index();
		swiper_wrapper.css("transform","translate3d(-"+which+"00%, 0px, 0px)");
		//startSlider();
	});


	

});