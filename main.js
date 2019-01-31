$(document).ready(function(){
	$("#tabs").on('click', 'li',function(){
		// var sect = $(this).siblings('.sect')
		// $('.sect').removeClass('open')
		// sect.addClass('open')
		$('.sect').removeClass('open')
		$(this).find('+ .sect').addClass('open')
	})
})