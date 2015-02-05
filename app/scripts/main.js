var numberofForms = $('form').length;

var checkForYes = function(elem) {
	if (elem === 'yes') {
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

var askForApproval = function(n){
	var result;
	if (countChecked().length < numberofForms) {
		result = 'You must submit all the answers';
	} else if (n >= 2) {
		result = 'Approved';
	} else {
		result = 'Denied';
	}
	// result = countChecked() < numberofForms ? ;
	// result = n >= 2 ? 'Approved' : 'Denied';
	return result;
};

var displayResult = function(text){
	$('.result').text(text);
};

$('#submit').on('click', function(){
	console.log('yes: ' + numberOfYes());
	console.log('result: ' + askForApproval(numberOfYes()));
	console.log(numberofForms + ' forms');
	console.log(countChecked().length + ' selected');
	displayResult(askForApproval(numberOfYes()));
});