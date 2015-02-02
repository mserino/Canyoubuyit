$(document).ready(function(){
	$('#submit').on('click', function(){
		$('#formValue').text($('input[name=select]:checked', '#needItSelection').val());
	});
});