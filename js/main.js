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
			myTitle = $('.ba-product__title > span');




		prodColor.on('change', function(){
			if (this.value === "black"){
				$('.headphones-grey').hide();
				$('.headphones-black').fadeIn('slow');
				$('.headphones-red').hide();
				myTitle.text("Wireless Black");

			} else if (this.value === "grey"){
				$('.headphones-grey').fadeIn('slow');
				$('.headphones-black').hide();
				$('.headphones-red').hide();
				myTitle.text("Wireless Grey");

			} else {
				$('.headphones-grey').hide();
				$('.headphones-black').hide();
				$('.headphones-red').fadeIn('slow');;
				myTitle.text("Wireless Red");

			}

		});
			// console.log($(this));
	});
})(jQuery);
