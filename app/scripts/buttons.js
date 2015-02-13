$('.button').on('click', function(){
	$(this).addClass('selectedBox').removeClass('unselectedBox');
	$(this).siblings().removeClass('selectedBox').addClass('unselectedBox');
});