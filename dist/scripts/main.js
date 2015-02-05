(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
