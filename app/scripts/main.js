$(document).ready(function(){

	var numberofForms = $('.selection').length;

	var checkForYes = function(elem) {
		if (elem ===  'yes') {
			return true;
		}
	};

	var checkForPotter = function(elem) {
		if (elem === 'potter') {
			return true;
		}
	};

	var countChecked = function() {
		var input = $('input:checked');
		return input;
	};

	var numberOfYes = function(){
		var arr = $.grep(countChecked(), function(elem){
			return checkForYes(elem.value);
		});
		return arr.length;
	};

	var potterPresence = function(){
		var potter = $.grep(countChecked(), function(elem){
			return checkForPotter(elem.value);
		});
		if (potter.length >= 1) {
			return true;
		}
	};

	var askForApproval = function(n, potter){
		var result;
		if (countChecked().length < numberofForms) {
			result = 'You must submit all the answers';
		} else if (n >= 2 || potter) {
			result = 'Approved';
		} else {
			result = 'Denied';
		}
		return result;
	};

	var displayResult = function(text){
		$('.result').text(text);
	};

	$('#submit').on('click', function(){
		// console.log('yes: ' + numberOfYes());
		// console.log('result: ' + askForApproval(numberOfYes()));
		// console.log(numberofForms + ' forms');
		// console.log(countChecked().length + ' selected');
		// console.log('Potter: ' + potterPresence());
		displayResult(askForApproval(numberOfYes(), potterPresence()));
	});
});