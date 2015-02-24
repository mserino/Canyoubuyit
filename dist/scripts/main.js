(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$('.button').on('click', function(){
	$(this).addClass('selectedBox').removeClass('unselectedBox');
	$(this).siblings().removeClass('selectedBox').addClass('unselectedBox');
});
},{}],2:[function(require,module,exports){
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
},{}]},{},[1,2]);
