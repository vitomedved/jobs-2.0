$(function() {
	$("body").fadeIn("700", function() {
		console.log("loaded");
	});
});

var users = [];
var user;
var pw;

var numberOfUsers = 0;

$(".loginBtn").on('click', function() {
	user = $(".user").val();
	pw = $(".pw").val();
});