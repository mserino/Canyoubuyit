$(document).ready(function(){

	$('#submit').on('click', function(){
		
		var yesCounter = 0;
		$('.needItSelection').each(function(){
			var selection = $('input[name=select]:checked', this).val();
			if (selection === 'yes') {
				yesCounter += 1;
			}
		});
		console.log(yesCounter);

		if(yesCounter >= 2){
			$('#formValue').text('APPROVED');
		} else {
			$('#formValue').text('DENIED');
		}
	});
});