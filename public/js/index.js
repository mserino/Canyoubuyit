$(document).ready(function(){

	$('#submit').on('click', function(){
		// $('#formValue').text($('input[name=select]:checked', '#needItSelection').val());
		var needItValue = $('input[name=select]:checked', '#needItSelection').val();
		if ( needItValue === 'yes') {
			$('#formValue').text('APPROVED');
		} else {
			$('#formValue').text('DENIED');
		}
	});
});