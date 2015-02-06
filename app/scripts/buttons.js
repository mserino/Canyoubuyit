console.log('button ready');

$('.button').on('click', function(){
	$(this).toggleClass('selectedBox');
});