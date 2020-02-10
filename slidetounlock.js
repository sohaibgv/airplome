$(function () {

	$("#slider").draggable({
		axis: 'x',
		containment: 'parent',
		drag: function (event, ui) {
			console.log(ui.position.left);
			if (ui.position.left > 270) {
				// $("#well").fadeOut();
				$('body').css("background-color", 'orange');
				$('html').css("background-color", 'orange');
				$('body').css("background-image", 'none');
			} else if (ui.position.left < 269) {
				$('html').css("background-color", '#dfdfdf');
				$('body').unbind('touchmove');
				$('body').css("background-color", '#dfdfdf');

				// Apparently Safari isn't allowing partial opacity on text with background clip? Not sure.
				// $("h2 span").css("opacity", 100 - (ui.position.left / 5))
			}
		},
		stop: function (event, ui) {
			if (ui.position.left < 271) {
				$(this).animate({
					left: 0
				})
			}
		}
	});

	// The following credit: http://www.evanblack.com/blog/touch-slide-to-unlock/ 
	function touchmovething() {
		$('#slider')[0].addEventListener('touchmove', function (event) {
			event.preventDefault();
			var el = event.target;
			var touch = event.touches[0];
			curX = touch.pageX - this.offsetLeft - 73;
			// console.log(touch);
			if (curX <= 0) return;
			if (curX > 250 && curX < 310) {
				// $('#well').fadeOut();
				$('html').css("background-color", 'orange');
				$('body').css("background-color", 'orange');

				$('body').css("background-image", 'none');
			}
			if (curX > 310) {
				
				return false;
			}
			el.style.webkitTransform = 'translateX(' + curX + 'px)';

		}, false);
	}
	touchmovething();
	$('#slider')[0].addEventListener('touchend', function (event) {
		event.preventDefault();
		console.log(event.changedTouches[0].clientX);
		if(event.changedTouches[0].clientX < 700){
		document.getElementById('airplaneMode').innerHTML = 'AIRPLANE MODE OFF'

			this.style.webkitTransition = '-webkit-transform 0.3s ease-in';
		this.addEventListener('webkitTransitionEnd', function (event) {
			this.style.webkitTransition = 'none';
		}, false);
		this.style.webkitTransform = 'translateX(0px)';
			$('html').css("background-color", '#dfdfdf');
			$('body').css("background-color", '#dfdfdf');

			
		}else{
		document.getElementById('airplaneMode').innerHTML = 'AIRPLANE MODE ON'
		}
	}, false); 

});