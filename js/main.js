;(function($){
	$(function(){
		$('.ba-slider').slick({
			dots: true,
			infinite: false
		});
		var qtyField = $('.ba-product__qty-field'),
			qtyUp = $('.ba-product__qty-up'),
			qtyDown = $('.ba-product__qty-down');

		qtyUp.on('click', function(event){
			event.preventDefault();
			var oldVal = qtyField.val();

			qtyField.val(++oldVal);
			// console.log(qtyFiel.val())
		});
		qtyDown.on('click', function(event){
			event.preventDefault();
			var oldVal = qtyField.val();
		if(--oldVal > 0){
			qtyField.val(oldVal);
		}

			// console.log(qtyFiel.val())
		});



		var prodColor = $('[name="product_color"]'),
			myImg = $('#myImage'),
			myTitle = $('.ba-product__title > span');

		prodColor.on('change', function(){
			if (this.value === "grey"){
			myImg.attr({'src': 'img/headphone-grey.png',
							'alt': 'myImg'});
			myTitle.html("Wireless Grey");

			} else if (this.value === "black"){
				myImg.attr({'src': 'img/headphones1.png',
							'alt': 'myImg'});
				myTitle.html("Wireless Black");
			} else {
				myImg.attr({'src': 'img/headphonered.png',
							'alt': 'myImg'});
				myTitle.html("Wireless Red");
			}

		});
			// console.log($(this));
	});
})(jQuery);
