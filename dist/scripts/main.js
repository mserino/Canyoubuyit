(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$('.button').on('click', function(){
	$(this).addClass('selectedBox').removeClass('unselectedBox');
	$(this).siblings().removeClass('selectedBox').addClass('unselectedBox');
});
},{}],2:[function(require,module,exports){
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
		var input = $('.selectedBox');
		return input;
	};

	var numberOfYes = function(){
		var arr = $.grep(countChecked(), function(elem){
			return checkForYes($(elem).data().attribute);
		});
		return arr.length;
	};

	var potterPresence = function(){
		var potter = $.grep(countChecked(), function(elem){
			return checkForPotter($(elem).data().attribute);
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
},{}]},{},[1,2]);
