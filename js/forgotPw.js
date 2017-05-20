var users = [{
	user: "asd",
	pw: "asd",
	email: "asd@gmail.com"
}];

$(".emailInput")

$(".sendEmail").on('click', function() {
	if(users.length === 0){
		alert("Taj email ne postoji u našoj bazi");
		return;
	}
	for(var i = 0; i < users.length; i++){
		if(users[i].email == $(".emailInput").val()){
			alert("email je poslan");
			//send mail
			return;
		}
	alert("Taj mail ne postoji u našoj bazi");
	}
});
