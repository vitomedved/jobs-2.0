$(function() {
	$("body").fadeIn("700", function() {
		console.log("loaded");
	});
});

var users = [{user: "asd", password: "asd", email:"asd@gmail.com"}];
var user;
var pw;

var numberOfUsers = 0;

$(".loginBtn").on('click', function() {
	user = $(".user").val();
	pw = $(".pw").val();

	if(users.length == 0){
		alert("Krivi unos");
		return;
	}else{
		for(var i = 0; i < users.length; i++){
			if(user == users[i].user){
				if(pw == users[i].password){
					alert("succesfull login");
					return;
				}
			}
		}
	}
	alert("Kriva lozinka ili korisničko ime")

});