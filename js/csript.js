
		$(document).ready(function(){
			$('.popup-btn').on('click', function(event){
				event.preventDefault();
				$('.popup').fadeIn();
			})
			$('.popup-close').on('click', function(event){
				event.preventDefault();
				$('.popup').fadeOut(); 
			})



			// Слайдер с преимуществами
			$('.features-slider').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2,
							prevArrow: '<button class="prev arrow"></button>',
							nextArrow: '<button class="next arrow"></button>',
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							prevArrow: '<button class="prev arrow"></button>',
							nextArrow: '<button class="next arrow"></button>',
							slidesToScroll: 1
						}
					}
					
				]
			}) 


			// Слайдер с отзывами
			$('.section-slider').slick({
				prevArrow: '<button type="button" class="feedback-slider_btn prev-btn"><img src= "../img/arrows/prev_arrow.png"/></button>',
				nextArrow: '<button type="button" class="feedback-slider_btn next-btn"><img src= "../img/arrows/next_arrow.png"/></button>'
			});
		})

		new WOW().init();

		