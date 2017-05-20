var currentUser = {
	user: "asd",
	pw: "asd",
	email: "asd@gmail.com"
};
var users = [{email: "asd@gmail.com"}];

var newPw, newEmail;

$(".emailInput")
$(".pwInput")

$(".kvadrat").on('click', function() {

	newPw = $(".pwInput").val();
	newEmail = $(".emailInput").val();

	for(var i = 0; i < users.length; i++){
		if(newEmail == users[i].email){
			alert("Taj email se već koristi");
			return;
		}
	}
	if(newPw == currentUser.pw){
			alert("Unijeli ste istu lozinku");
		}else if($(".repeatPw").val() != newPw){
			alert("Lozinke nisu jednake");
			return;
		}else if(newPw == "" ){
			currentUser.email = newEmail;
		}else if(newEmail == ""){
			currentUser.pw = newPw;
		}
});