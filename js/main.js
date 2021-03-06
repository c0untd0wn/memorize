var xhr = new XMLHttpRequest();

xhr.open('GET', './data/data1.txt', false);
xhr.send(null);
var data1 = xhr.responseText.split('\n');

xhr.open('GET', './data/data2.txt', false);
xhr.send(null);
var data2 = xhr.responseText.split('\n');

var length = data1.length;

function newFilledArray(len, val) {
    var array = [];
    for (var i = 0; i < len; i++) {
	array[i] = val;
    }
    return array;
}
var check = newFilledArray(length, 0);

$(document).ready(function(){
	var type = Number(window.location.search.replace( "?", "" ).split('=')[1]);
	if(type == 2) {
		$('#type2').addClass('active');
	}
	else {
		$('#type1').addClass('active');
		type = 1
	}
	$('#type1').click(function(){
		type = 1
		$('#type2').removeClass('active');
		$('#type1').addClass('active');
	});
	$('#type2').click(function(){
		type = 2
		$('#type1').removeClass('active');
		$('#type2').addClass('active');
	});
	
    $('#next').click(function(){
		var index = Math.floor(Math.random() * length);
		while(check[index] == 1) {
			index = Math.floor(Math.random() * length);
		}
		check[index] = 1;
		var q = data2[index];
		var a = data1[index];
		if(type == 1) {
			q = data1[index];
			a = data2[index];
		}
		$('#question').empty();
		$('#question').append('<h3>' + q + '</h3>');
		$('#answer').empty();
		$('#answer').append('<h3 class="hide-answer">' + a + '</h3>');
    });

    $('#show-answer').click(function(){
		$('.hide-answer').removeClass('hide-answer');
    });
});
