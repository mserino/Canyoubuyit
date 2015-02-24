$(document).ready(function(){

	var MINIMUM_YES = 2;
	var numberofForms = $('.selection').length;
	var config = {
		yes: 'yes',
		potter: 'potter',
	};

	var checkFor = function(elem, result) {
		if (elem === result) {
			return true;
		}
	};

	var countChecked = function() {
		var input = $('.selectedBox');
		return input;
	};

	var control = function(variable) {
		var array = $.grep(countChecked(), function(elem){
			return checkFor($(elem).data().attribute, variable);
		});
		if (variable === config.potter) {
			if (array.length >= 1) {
				return true;
			}
		}
		return array.length;
	};

	var askForApproval = function(yes, potter){
		var result;
		if (countChecked().length < numberofForms) {
			result = 'You must submit all the answers';
		} else if (control(yes) >= MINIMUM_YES || control(potter)) {
			result = 'Approved';
		} else {
			result = 'Denied';
		}
		return result;
	};

	var displayResult = function(text){
		$('.result').hide();
		if (text === 'Approved') {
			$('.result').removeClass('Denied').addClass(text);
		} else {
			$('.result').removeClass('Approved').addClass(text);
		}
		$('.result').text(text).show("puff", {percent:200 }, 700);
	};

	$('#submit').on('click', function(){
		displayResult(askForApproval(config.yes, config.potter));
	});
});