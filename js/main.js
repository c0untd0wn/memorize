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
    $('#next').click(function(){
	type = window.location.search.replace( "?", "" ).split('=')[1];
	var index = Math.floor(Math.random() * length);
	while(check[index] == 1) {
	    index = Math.floor(Math.random() * length);
	}
	check[index] = 1;
	var q = data2[index];
	var a = data1[index];
	if(type == "1") {
	    q = data1[index];
	    a = data2[index];
	}
	$('#question').empty();
	$('#question').append('<span>' + q + '</span>');
	$('#answer').empty();
	$('#answer').append('<span class="hidden">' + a + '</span>');
    });

    $('#show-answer').click(function(){
	$('.hidden').removeClass('hidden');
    });
});
