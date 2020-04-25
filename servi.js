function validationForm(){
	var name = document.getElementById("name");
	var phone = document.getElementById("phone");
	var email = document.getElementById("email");

	if(name.value === "" && phone.value === "" && email.value ===""){
	alert("Please enter some value in name");

	
	
	}else
	if(!(isNaN(name.value))){
		alert("Please enter text value in name");
	
	}else
	if(isNaN(phone.value)){
		alert("Please enter number value in phone");
	}
	
else{
	alert("Welcome Please give us time to look on to your Email and quote.")
}
	
	
}
	