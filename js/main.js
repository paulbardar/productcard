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
			myImg = $('#myImage, #myImage1, #myImage2'),
			myTitle = $('.ba-product__title > span');

			prodColor.click(function() {
			  myImg.animate({
			    width: "80%",
			    opacity: 0.8,
			    marginLeft: "0.3in",
			    fontSize: "3em",
			    borderWidth: "10px"
			  }, 1500 );
			});


		prodColor.on('change', function(){
			if (this.value === "grey"){
			myImg.attr({'src': 'img/headphone-grey.png',
							'alt': 'myImg'});
			myTitle.text("Wireless Grey");


			} else if (this.value === "black"){
				myImg.attr({'src': 'img/headphones1.png',
							'alt': 'myImg'});
				myTitle.text("Wireless Black");

			} else {
				myImg.attr({'src': 'img/headphonered.png',
							'alt': 'myImg'});
				myTitle.text("Wireless Red");

			}

		});
			// console.log($(this));
	});
})(jQuery);
