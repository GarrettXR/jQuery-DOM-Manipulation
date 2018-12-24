$(document).ready(function(){
	$("#tabs").on('click', 'li',function(){
		var sibling = $(this).siblings('.sec')

		$(".sect").removeClass('nums')
		sibling.addClass('nums')
	})
	console.log(this)

	

})